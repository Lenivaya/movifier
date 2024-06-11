import * as TypeGraphQL from 'type-graphql'
import { Movie } from '@/generated/type-graphql'
import { AppContext } from '@/graphql/context'
import { GraphQLResolveInfo, GraphQLError } from 'graphql'
import { FetchMovieFromTmdbArgs } from '@/graphql/movies/args/fetchMovieFromTmdbArgs'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import { Cast, Crew, ExternalId, MovieDb } from 'moviedb-promise'
import { PrismaClient } from '@prisma/client'
import { isNone, isSome } from '@/lib/types/option'

@TypeGraphQL.Resolver()
export class CustomMoviesTmdbResolver {
  @TypeGraphQL.Mutation(() => Movie, { nullable: true })
  async fetchMovieFromTmdb(
    @TypeGraphQL.Ctx() ctx: AppContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() fetchTmdbArgs: FetchMovieFromTmdbArgs
  ): Promise<Movie> {
    const { tmdb } = ctx
    const movieId = await fetchAndInsertMovieData(
      fetchTmdbArgs.imdbId,
      tmdb,
      getPrismaFromContext(ctx)
    )

    if (isNone(movieId))
      throw new GraphQLError('Error while fetching movie data')

    const { _count } = transformInfoIntoPrismaArgs(info)
    return getPrismaFromContext(ctx).movie.findUnique({
      where: { id: movieId },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count))
    })
  }
}

export async function fetchAndInsertMovieData(
  imdbId: string,
  tmdb: MovieDb,
  prisma: PrismaClient
) {
  try {
    const movieData = await fetchDetailedMovieData(imdbId, tmdb)

    const createMovie = await prisma.movie.create({
      data: {
        movieInfo: {
          create: {
            imdbId: movieData.movieInfo.imdb_id!,
            title: movieData.movieInfo.title!,
            description: movieData.movieInfo.overview!,
            alternativeTitles: movieData.alternativeTitles,
            durationInMinutes: movieData.movieInfo.runtime!,
            posterUrl: `https://image.tmdb.org/t/p/w500${movieData.movieInfo.poster_path}`,
            releaseDate: new Date(movieData.movieInfo.release_date!)
          }
        },
        genres: {
          connectOrCreate: movieData.genres
        },
        studios: {
          connectOrCreate: movieData.studios
        },
        spokenLanguages: {
          connectOrCreate: movieData.spokenLanguages
        },
        keywordCategories: {
          connectOrCreate: movieData.keywords
        },
        crewMembers: {
          create: movieData.crew
        }
      }
    })

    return createMovie.id
  } catch (error) {
    console.error('Error while fetching movie data', error)
    return null
  }
}

export async function fetchDetailedMovieData(imdbId: string, tmdb: MovieDb) {
  const response = await tmdb.find({
    id: imdbId,
    external_source: ExternalId.ImdbId
  })

  if (!response?.movie_results?.length) {
    throw new Error('Movie not found')
  }

  const tmdbId = response.movie_results[0].id
  const [
    movieInfoResult,
    creditsResult,
    keywordsInfoResult,
    alternativeTitlesResult
  ] = await Promise.allSettled([
    tmdb.movieInfo({ id: tmdbId! }),
    tmdb.movieCredits({ id: tmdbId! }),
    tmdb.movieKeywords({ id: tmdbId! }),
    tmdb.movieAlternativeTitles({ id: tmdbId! })
  ])

  const movieInfo =
    movieInfoResult.status === 'fulfilled' ? movieInfoResult.value : null
  const credits =
    creditsResult.status === 'fulfilled' ? creditsResult.value : null
  const keywordsInfo =
    keywordsInfoResult.status === 'fulfilled' ? keywordsInfoResult.value : null
  const alternativeTitles =
    alternativeTitlesResult.status === 'fulfilled'
      ? alternativeTitlesResult.value
      : null

  if (!movieInfo) throw new Error('Failed to fetch movie info')

  const genres =
    movieInfo.genres?.map((genre) => ({
      where: { name: genre.name! },
      create: { name: genre.name! }
    })) ?? []

  const studios =
    movieInfo.production_companies?.map((studio) => ({
      where: { name: studio.name! },
      create: { name: studio.name! }
    })) ?? []

  const spokenLanguages =
    movieInfo.spoken_languages?.map((language) => ({
      where: {
        iso_639_1: language.iso_639_1!,
        name: language.name!
      },
      create: {
        iso_639_1: language.iso_639_1!,
        name: language.name!
      }
    })) ?? []

  const keywords =
    keywordsInfo?.keywords?.map((keyword) => ({
      where: { name: keyword.name! },
      create: { name: keyword.name! }
    })) ?? []

  const crewPromises = [
    ...(credits?.cast ?? []).map((actor) =>
      getPersonInfo(actor, tmdb, 'Actor')
    ),
    ...(credits?.crew ?? []).map((member) =>
      getPersonInfo(member, tmdb, member.job!)
    )
  ]

  const crewResults = await Promise.allSettled(crewPromises)
  const crew = crewResults
    .filter(
      (result) =>
        result.status === 'fulfilled' &&
        isSome((result as PromiseFulfilledResult<any>).value)
    )
    .map((result: any) => result.value)

  return {
    movieInfo,
    genres,
    studios,
    spokenLanguages,
    keywords,
    alternativeTitles: alternativeTitles?.titles?.map((t) => t.title!) ?? [],
    crew
  }
}

async function getPersonInfo(person: Cast | Crew, tmdb: MovieDb, job: string) {
  const personInfo = await tmdb.personInfo({ id: person.id! })

  if (isNone(personInfo.imdb_id)) return null

  return {
    order: isCast(person) ? person.order : 0,
    crewMember: {
      connectOrCreate: {
        where: { imdbId: personInfo.imdb_id },
        create: {
          name: person.name,
          imdbId: personInfo.imdb_id,
          description: personInfo.biography,
          photoUrl: `https://image.tmdb.org/t/p/w500${personInfo.profile_path}`,
          popularity: person.popularity ?? 0
        }
      }
    },
    movieCrewMemberType: {
      connectOrCreate: {
        where: { name: job },
        create: { name: job }
      }
    }
  }
}

const isCast = (crewMember: Cast | Crew): crewMember is Cast => {
  return 'order' in crewMember
}
