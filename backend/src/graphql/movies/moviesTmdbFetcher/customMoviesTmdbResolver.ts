import * as TypeGraphQL from 'type-graphql'
import { Movie } from '@/generated/type-graphql'
import { AppContext } from '@/graphql/context'
import { GraphQLResolveInfo } from 'graphql/type'
import { FetchMovieFromTmdbArgs } from '@/graphql/movies/args/fetchMovieFromTmdbArgs'
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs
} from '@/generated/type-graphql/helpers'
import { ExternalId, MovieDb } from 'moviedb-promise'
import { PrismaClient } from '@prisma/client'
import { isNone, isSome } from '@/lib/types/option'
import { GraphQLError } from 'graphql/index'

@TypeGraphQL.Resolver()
export class CustomMoviesTmdbResolver {
  @TypeGraphQL.Mutation((_returns) => Movie, {
    nullable: true
  })
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
    const {
      movieInfo,
      genres,
      studios,
      spokenLanguages,
      alternativeTitles,
      crew,
      keywords
    } = await fetchDetailedMovieData(imdbId, tmdb)

    const createMovie = await prisma.movie.create({
      data: {
        movieInfo: {
          create: {
            imdbId: movieInfo.imdb_id!,
            title: movieInfo.title!,
            description: movieInfo.overview!,
            alternativeTitles: (alternativeTitles.titles ?? []).map(
              (t) => t.title!
            ),
            durationInMinutes: movieInfo.runtime!,
            posterUrl: `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`,
            releaseDate: new Date(movieInfo.release_date!)
          }
        },
        genres: {
          connectOrCreate: genres.map((genre) => ({
            where: { name: genre.name! },
            create: { name: genre.name! }
          }))
        },
        studios: {
          connectOrCreate: studios.map((studio) => ({
            where: { name: studio.name! },
            create: { name: studio.name! }
          }))
        },
        spokenLanguages: {
          connectOrCreate: spokenLanguages.map((language) => ({
            where: { language: language.language! },
            create: { language: language.language! }
          }))
        },
        keywordCategories: {
          connectOrCreate: keywords.map((keyword) => ({
            where: { name: keyword.name! },
            create: { name: keyword.name! }
          }))
        },
        crewMembers: {
          create: crew.map((member) => ({
            crewMember: {
              connectOrCreate: {
                where: { imdbId: member!.imdbId! },
                create: {
                  name: member!.name!,
                  imdbId: member!.imdbId!,
                  description: member!.description!,
                  photoUrl: member!.photoUrl!
                }
              }
            },
            movieCrewMemberType: {
              connectOrCreate: {
                where: { name: member!.movieCrewMemberType! },
                create: { name: member!.movieCrewMemberType! }
              }
            }
          }))
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

  const [movieInfo, credits, keywordsInfo, alternativeTitles] =
    await Promise.all([
      tmdb.movieInfo({ id: tmdbId! }),
      tmdb.movieCredits({ id: tmdbId! }),
      tmdb.movieKeywords({ id: tmdbId! }),
      tmdb.movieAlternativeTitles({ id: tmdbId! })
    ])

  const genres = (movieInfo.genres ?? []).map((genre) => ({
    name: genre.name
  }))
  const studios = (movieInfo.production_companies ?? []).map((studio) => ({
    name: studio.name
  }))
  const spokenLanguages = (movieInfo.spoken_languages ?? []).map(
    (language) => ({
      language: language.iso_639_1
    })
  )
  const keywords = (keywordsInfo.keywords ?? []).map((keyword) => ({
    name: keyword.name
  }))

  const crewPromises = [
    ...(credits.cast ?? []).map((actor) => getPersonInfo(actor, tmdb, 'Actor')),
    ...(credits.crew ?? []).map((member) =>
      getPersonInfo(member, tmdb, member.job!)
    )
  ]

  const crew = (await Promise.all(crewPromises)).filter(isSome)

  return {
    movieInfo,
    credits,
    crew,
    genres,
    studios,
    spokenLanguages,
    keywords,
    alternativeTitles
  }
}

async function getPersonInfo(person: any, tmdb: MovieDb, job: string) {
  const personInfo = await tmdb.personInfo({ id: person.id })

  return isSome(personInfo.imdb_id)
    ? {
        name: person.name,
        imdbId: personInfo.imdb_id,
        movieCrewMemberType: job,
        description: personInfo.biography,
        photoUrl: `https://image.tmdb.org/t/p/w500${personInfo.profile_path}`
      }
    : null
}
