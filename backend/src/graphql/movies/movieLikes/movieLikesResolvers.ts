import { Authorized, NonEmptyArray } from 'type-graphql'
import {
  MovieLikedByUserCrudResolver,
  MovieLikedByUserRelationsResolver,
  ResolverActionsConfig
} from '@/generated/type-graphql'
import { isAdmin } from '@/graphql/auth/rules/isAdmin'
import { isAuthenticated } from '@/graphql/auth/rules/isAuthenticated'
import {
  isMovieLikeOwnerCreation,
  isMovieLikeOwnerDeletion
} from '@/graphql/movies/movieLikes/auth/isMovieLikeOwnerDeletion'

export const movieLikesResolvers: NonEmptyArray<Function> = [
  MovieLikedByUserCrudResolver,
  MovieLikedByUserRelationsResolver
]

export const movieLikesActionsConfig: ResolverActionsConfig<'MovieLikedByUser'> =
  {
    createOneMovieLikedByUser: [
      Authorized([
        {
          OR: [
            isAdmin,
            {
              AND: [isAuthenticated, isMovieLikeOwnerCreation]
            }
          ]
        }
      ])
    ],
    deleteOneMovieLikedByUser: [
      Authorized([
        {
          OR: [
            isAdmin,
            {
              AND: [isAuthenticated, isMovieLikeOwnerDeletion]
            }
          ]
        }
      ])
    ]
  }
