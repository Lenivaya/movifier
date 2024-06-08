import 'reflect-metadata'

import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { MovieDb } from 'moviedb-promise'
import { fetchAndInsertMovieData } from '@/graphql/movies/moviesTmdbFetcher/customMoviesTmdbResolver'

dotenv.config()

const prisma = new PrismaClient()

const movieImdbIds: string[] = [
  'tt1136617',
  'tt0110912',
  'tt0361748',
  'tt3395184',
  'tt0407887',
  'tt0105236',
  'tt7131622',
  'tt0116367',
  'tt1028528',
  'tt3460252',
  'tt0060196',
  'tt0116282',
  'tt0175880',
  'tt0780536',
  'tt0109830',
  'tt10640346',
  'tt0099348',
  'tt1205489',
  'tt0416320',
  'tt2267998'
]

async function createIfNotExists(
  imdbId: string,
  onSuccess: (imdbId: string) => Promise<any>
) {
  const movie = await prisma.movie.findFirst({
    where: {
      movieInfo: {
        imdbId: { equals: imdbId }
      }
    }
  })

  if (movie) return

  await onSuccess(imdbId)
}

async function main() {
  const tmdb = new MovieDb(process.env.TMDB_API_KEY ?? '')

  const promises = movieImdbIds.map(
    async (imdbId) =>
      await createIfNotExists(imdbId, async (imdbId) =>
        fetchAndInsertMovieData(imdbId, tmdb, prisma)
      )
  )

  await Promise.allSettled(promises)
}

main()
  .then(() => console.log('Seed was successful'))
  .catch((e) => console.error(e))
