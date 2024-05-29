'use client'

import { FC } from 'react'
import { ComposeKeyMovieReviewUser } from '@/components/movifier/movie-reviews/MovieReviewCard/types'
import {
  cn,
  IsMovieReviewLikedByUserDocument,
  MovieReview,
  useIsMovieReviewLikedByUserQuery,
  useMarkMovieReviewLikedMutation,
  useUnmarkMovieReviewLikedMutation
} from '@/lib'
import { isNone, isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'
import { HeartIcon } from 'lucide-react'
import { useCurrentUser, useIsSignedIn } from '@/lib/hooks/CurrentUser'
import { isReference } from '@apollo/client'
import { create } from 'mutative'

export const MovieReviewLikeButton: FC<{
  composeKey: ComposeKeyMovieReviewUser
}> = ({ composeKey }) => {
  const isSignedIn = useIsSignedIn()
  const { data } = useIsMovieReviewLikedByUserQuery({
    variables: composeKey,
    skip: !isSignedIn
  })
  const isReviewLiked = isSome(data?.movieReviewLikedByUser?.movieReviewId)

  const user = useCurrentUser()
  const isAuthenticated = isSome(user)

  const [markMovieReviewLiked] = useMarkMovieReviewLikedMutation()
  const [unmarkMovieReviewLiked] = useUnmarkMovieReviewLikedMutation()

  const handleMarkMovieReviewLiked = async () => {
    await markMovieReviewLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error.message)
        toast({
          title: 'Error liking movie review'
        })
      },
      update: (cache, { data }) => {
        cache.writeQuery({
          query: IsMovieReviewLikedByUserDocument,
          variables: composeKey,
          data: {
            movieReviewLikedByUser: {
              movieReviewId: data?.createOneMovieReviewLikedByUser.movieReviewId
            }
          }
        })
        cache.modify<MovieReview>({
          id: 'MovieReview:' + composeKey.movieReviewId,
          fields: {
            _count: (existing) => {
              if (isReference(existing) || isNone(existing)) return existing
              return create({ ...existing }, (draft) => {
                draft.likedBy += 1
              })
            }
          }
        })
      }
    })
  }

  const handleMovieReviewUnsetLiked = async () => {
    await unmarkMovieReviewLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error.message)
        toast({
          title: 'Error unsetting movie review liked'
        })
      },
      update: (cache, data) => {
        cache.writeQuery({
          query: IsMovieReviewLikedByUserDocument,
          variables: composeKey,
          data: {
            movieReviewLikedByUser: null
          }
        })
        cache.modify<MovieReview>({
          id: 'MovieReview:' + composeKey.movieReviewId,
          fields: {
            _count: (existing) => {
              if (isReference(existing) || isNone(existing)) return existing
              return create({ ...existing }, (draft) => {
                if (draft.likedBy >= 1) draft.likedBy -= 1
              })
            }
          }
        })
      }
    })
  }

  const handleMovieReviewLiked = async () => {
    if (!isAuthenticated)
      return toast({ title: 'Please sign in to like a review' })

    isReviewLiked
      ? await handleMovieReviewUnsetLiked()
      : await handleMarkMovieReviewLiked()
  }

  return (
    <div className='flex flex-col items-start gap-2'>
      <motion.div
        whileHover={{
          scale: 1.4,
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <HeartIcon
          fill={cn({
            currentColor: isReviewLiked
          })}
          onClick={handleMovieReviewLiked}
          className={cn('w-5 h-5 cursor-pointer', {
            'text-slate-700': !isReviewLiked,
            'text-red-500': isReviewLiked
          })}
        />
      </motion.div>
    </div>
  )
}
