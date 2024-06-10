import { NonEmptyArray } from 'type-graphql'
import { FindManyMovifierAppUserResolver } from '@/generated/type-graphql'
import { CustomUserResolver } from '@/graphql/users/customUserResolver'

export const userResolvers: NonEmptyArray<Function> = [
  CustomUserResolver,
  FindManyMovifierAppUserResolver
]
