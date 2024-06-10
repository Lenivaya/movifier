import { Rule } from 'typegraphql-authchecker'
import { AppContext } from '@/graphql/context'
import { isSome } from '@/lib/types/option'
import { D } from '@mobily/ts-belt'
import { Prisma } from '@prisma/client'
import { Authorized } from 'type-graphql'
import { isAdmin } from '@/graphql/auth/rules/isAdmin'
import { isAuthenticated } from '@/graphql/auth/rules/isAuthenticated'
import {
  MovieReviewCreateInput,
  MovieReviewWhereUniqueInput
} from '@/generated/type-graphql'

interface IMovieReviewWhereArgs {
  where: MovieReviewWhereUniqueInput
  create?: MovieReviewCreateInput
}

const isMovieReviewOwner =
  (isUpsert: boolean = false): Rule<AppContext, IMovieReviewWhereArgs> =>
  async ({ context, args }) => {
    if (
      isUpsert &&
      isSome(args.create) &&
      [args.create?.rating?.connect, args.create.rating.connectOrCreate].some(
        isSome
      )
    ) {
      const ownedReviewRating = await context.prisma.movieRating.findFirst({
        where: {
          OR: [
            {
              id: args.create.rating.connect?.id
            },
            {
              id: args.create.rating.connectOrCreate?.where.id
            }
          ]
        },
        select: {
          id: true
        }
      })

      return isSome(ownedReviewRating)
    }

    const ownedReview = await context.prisma.movieReview.findUnique({
      where: D.merge(args.where as Prisma.MovieReviewWhereUniqueInput, {
        rating: {
          userId: {
            equals: context.jwt?.userId
          }
        }
      }),
      select: {
        id: true
      }
    })

    return isSome(ownedReview)
  }

export const reviewOneActionAuth = (isUpsert: boolean = false) =>
  Authorized([
    {
      OR: [
        isAdmin,
        {
          AND: [isAuthenticated, isMovieReviewOwner(isUpsert)]
        }
      ]
    }
  ])
