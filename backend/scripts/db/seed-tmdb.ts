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
  'tt1028528'
]

async function main() {
  console.log(process.env.TMDB_API_KEY)

  const tmdb = new MovieDb(process.env.TMDB_API_KEY ?? '')

  const promises = movieImdbIds.map(
    async (imdbId) => await fetchAndInsertMovieData(imdbId, tmdb, prisma)
  )

  await Promise.allSettled(promises)
}

main()
  .then(() => console.log('Seed was successful'))
  .catch((e) => console.error(e))
