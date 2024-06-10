import React, { FC, useCallback, useState } from 'react'
import {
  cn,
  useIsMovieLikedByUserQuery,
  useMarkMovieLikedMutation,
  useUnmarkMovieLikedMutation
} from '@/lib'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'
import { HeartIcon } from 'lucide-react'

import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'

export const MovieLikedButton: FC<
  {
    composeKey: ComposeKeyMovieUser
    isSignedIn?: boolean
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ composeKey, isSignedIn = false, className }) => {
  const [isMovieLiked, setIsMovieLiked] = useState(false)
  useIsMovieLikedByUserQuery({
    variables: composeKey,
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setIsMovieLiked(isSome(data.movieLikedByUser?.movieId))
    }
  })

  const [markMovieLiked] = useMarkMovieLikedMutation()
  const [unmarkMovieLiked] = useUnmarkMovieLikedMutation()

  const handleMovieSetLiked = async () => {
    if (!isSignedIn) return toast({ title: 'Please sign in to like movie' })

    await markMovieLiked({
      variables: composeKey,
      refetchQueries: [
        'GetUserLikedMovieIdsInMovieList',
        'GetUserLikedPersonMovieIds',
        'GetUserLikedMovies',
        'GetMovieCardStats'
      ],
      onError: (error) => {
        console.error(error.message)
        toast({
          title: 'Error liking movie'
        })
      },
      onCompleted: () => {
        setIsMovieLiked(true)
      }
    })
  }

  const handleMovieUnsetLiked = async () => {
    await unmarkMovieLiked({
      variables: composeKey,
      refetchQueries: [
        'GetUserLikedMovieIdsInMovieList',
        'GetUserLikedPersonMovieIds',
        'GetUserLikedMovies',
        'GetMovieCardStats'
      ],
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error unliking movie'
        })
      },
      onCompleted: () => {
        setIsMovieLiked(false)
      },
      update: (cache, { data, errors }) => {
        apolloObjectRemover(cache, data?.deleteOneMovieLikedByUser, errors)
      }
    })
  }

  const onClick = useCallback(
    async (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation()
      event.preventDefault()

      isMovieLiked ? await handleMovieUnsetLiked() : await handleMovieSetLiked()
    },
    [isMovieLiked]
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
            'text-red-800': !isMovieLiked,
            'text-red-500': isMovieLiked
          })}
        />
      </motion.div>
    </div>
  )
}
