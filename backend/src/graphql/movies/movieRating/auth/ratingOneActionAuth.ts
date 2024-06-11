import {
  MovieRatingCreateInput,
  MovieRatingWhereUniqueInput
} from '@/generated/type-graphql'
import { Rule } from 'typegraphql-authchecker'
import { AppContext } from '@/graphql/context'
import { isSome } from '@/lib/types/option'
import { D } from '@mobily/ts-belt'
import { Prisma } from '@prisma/client'
import { Authorized } from 'type-graphql'
import { isAdmin } from '@/graphql/auth/rules/isAdmin'
import { isAuthenticated } from '@/graphql/auth/rules/isAuthenticated'

interface IMovieRatingWhereArgs {
  where: MovieRatingWhereUniqueInput
  create?: MovieRatingCreateInput
}

const isMovieRatingOwner =
  (isUpsert: boolean = false): Rule<AppContext, IMovieRatingWhereArgs> =>
  async ({ context, args }) => {
    if (
      isUpsert &&
      isSome(args.create) &&
      [args.create?.user?.connect, args.create.user.connectOrCreate].some(
        isSome
      )
    ) {
      const creatingForSameUser = [
        args.create?.user?.connect?.id,
        args.create.user.connectOrCreate?.where.id
      ].some((id) => id === context.jwt?.userId)
      return creatingForSameUser
    }

    const ownedRating = await context.prisma.movieRating.findUnique({
      where: D.merge(args.where as Prisma.MovieRatingWhereUniqueInput, {
        userId: {
          equals: context.jwt?.userId
        }
      }),
      select: {
        id: true
      }
    })

    return isSome(ownedRating)
  }

export const ratingOneActionAuth = (isUpsert: boolean = false) =>
  Authorized([
    {
      OR: [
        isAdmin,
        {
          AND: [isAuthenticated, isMovieRatingOwner(isUpsert)]
        }
      ]
    }
  ])
