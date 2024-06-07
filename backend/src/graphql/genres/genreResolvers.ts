import { NonEmptyArray } from 'type-graphql'
import {
  GenreCrudResolver,
  GenreRelationsResolver
} from '@/generated/type-graphql'

export const genresResolvers: NonEmptyArray<Function> = [
  GenreCrudResolver,
  GenreRelationsResolver
]
