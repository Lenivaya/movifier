import React, { FC, useState, forwardRef, useCallback } from 'react'
import {
  cn,
  useIsMovieWatchedByUserQuery,
  useMarkMovieWatchedMutation,
  useUnmarkMovieWatchedMutation
} from '@/lib'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'
import { EyeIcon } from 'lucide-react'

import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'

export const MovieWatchedButton: FC<
  {
    composeKey: ComposeKeyMovieUser
    isSignedIn?: boolean
  } & React.HTMLAttributes<HTMLDivElement>
> = ({ composeKey, isSignedIn = false, className }) => {
  const [isMovieWatched, setIsMovieWatched] = useState(false)
  useIsMovieWatchedByUserQuery({
    variables: composeKey,
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setIsMovieWatched(isSome(data.movieWatchedByUser?.movieId))
    }
  })

  const [markMovieWatched] = useMarkMovieWatchedMutation()
  const [unmarkMovieWatched] = useUnmarkMovieWatchedMutation()

  const handleMovieSetWatched = async () => {
    if (!isSignedIn)
      return toast({ title: 'Please sign in to mark movie as watched' })

    await markMovieWatched({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error marking movie as watched',
          description: 'Failed to mark movie as watched. Please try again.'
        })
      },
      onCompleted: () => {
        setIsMovieWatched(true)
      }
    })
  }

  const handleMovieUnsetWatched = async () => {
    await unmarkMovieWatched({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error unmarking movie as watched',
          description: 'Failed to unmark movie as watched. Please try again.'
        })
      },
      onCompleted: () => {
        setIsMovieWatched(false)
      },
      update: (cache, { data, errors }) => {
        apolloObjectRemover(cache, data?.deleteOneMovieWatchedByUser, errors)
      }
    })
  }

  const onClick = useCallback(
    async (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation()
      event.preventDefault()

      isMovieWatched
        ? await handleMovieUnsetWatched()
        : await handleMovieSetWatched()
    },
    [isMovieWatched]
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
        <EyeIcon
          className={cn('cursor-pointer w-full h-full', {
            'text-green-800': !isMovieWatched,
            'text-green-500': isMovieWatched
          })}
          onClick={onClick}
        />
      </motion.div>
    </div>
  )
}
