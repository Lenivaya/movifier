import { PrismaClient } from '@prisma/client'
import { MoviefireAppUserRole } from '@/generated/type-graphql'
import { MovieDb } from 'moviedb-promise'

export type AppContext = {
  prisma: PrismaClient
  jwt?: JwtPayload
  tmdb: MovieDb
}

export type JwtPayload = {
  userId: string
  userRole: MoviefireAppUserRole
}
