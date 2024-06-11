import {
  MovieLikedByUserCreateInput,
  MovieLikedByUserWhereUniqueInput
} from '@/generated/type-graphql'
import { Rule } from 'typegraphql-authchecker'
import { AppContext } from '@/graphql/context'
import { D } from '@mobily/ts-belt'
import { Prisma } from '@prisma/client'
import { isSome } from '@/lib/types/option'

interface IMovieLikedByUserCreateArgs {
  data: MovieLikedByUserCreateInput
}

export const isMovieLikeOwnerCreation: Rule<
  AppContext,
  IMovieLikedByUserCreateArgs
> = async ({ context, args }) => {
  const creatingForSameUser = [
    args.data.user.connect?.id,
    args.data.user.connectOrCreate?.where.id
  ].some((id) => id === context.jwt?.userId)
  return creatingForSameUser
}

interface IMovieLikedWhereArgs {
  where: MovieLikedByUserWhereUniqueInput
}

export const isMovieLikeOwnerDeletion: Rule<
  AppContext,
  IMovieLikedWhereArgs
> = async ({ context, args }) => {
  const ownedLike = await context.prisma.movieLikedByUser.findUnique({
    where: D.merge(args.where as Prisma.MovieLikedByUserWhereUniqueInput, {
      userId: {
        equals: context.jwt?.userId
      }
    }),
    select: {
      userId: true
    }
  })

  return isSome(ownedLike)
}
