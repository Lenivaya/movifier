import React, { FC, useCallback, useState } from 'react'
import {
  cn,
  useIsMovieListLikedByUserQuery,
  useMarkMovieListLikedMutation,
  useUnmarkMovieListLikedMutation
} from '@/lib'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'
import { HeartIcon } from 'lucide-react'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'

export type ComposeKeyMovieListUser = { movieListId: string; userId: string }

export const MovieListLikedButton: FC<
  {
    composeKey: ComposeKeyMovieListUser
    isSignedIn?: boolean
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ composeKey, isSignedIn = false, className }) => {
  const [isMovieListLiked, setIsMovieListLiked] = useState(false)
  useIsMovieListLikedByUserQuery({
    variables: composeKey,
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setIsMovieListLiked(isSome(data.movieListLikedByUser?.movieListId))
    }
  })

  const [markMovieListLiked] = useMarkMovieListLikedMutation()
  const [unmarkMovieListLiked] = useUnmarkMovieListLikedMutation()

  const handleMovieListSetLiked = async () => {
    if (!isSignedIn)
      return toast({ title: 'Please sign in to like movie list' })

    await markMovieListLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error.message)
        toast({
          title: 'Error liking movie list'
        })
      },
      onCompleted: () => {
        setIsMovieListLiked(true)
      }
    })
  }

  const handleMovieUnsetLiked = async () => {
    await unmarkMovieListLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error unliking movie list'
        })
      },
      onCompleted: () => {
        setIsMovieListLiked(false)
      },
      update: (cache, { data, errors }) => {
        apolloObjectRemover(cache, data?.deleteOneMovieListLikedByUser, errors)
      }
    })
  }

  const onClick = useCallback(
    async (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation()
      event.preventDefault()

      isMovieListLiked
        ? await handleMovieUnsetLiked()
        : await handleMovieListSetLiked()
    },
    [isMovieListLiked]
  )

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <motion.div
        whileHover={{
          scale: 1.4,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className={'w-full h-full'}
      >
        <HeartIcon
          fill={'currentColor'}
          onClick={onClick}
          className={cn('cursor-pointer w-full h-full', {
            'text-red-800': !isMovieListLiked,
            'text-red-500': isMovieListLiked
          })}
        />
      </motion.div>
    </div>
  )
}
