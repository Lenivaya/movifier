import { FC, useState } from 'react'
import { ComposeKeyMovieReviewUser } from '@/components/movifier/movie-reviews/MovieReviewCard/types'
import {
  cn,
  useIsMovieReviewLikedByUserQuery,
  useMarkMovieReviewLikedMutation,
  useUnmarkMovieReviewLikedMutation
} from '@/lib'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { motion } from 'framer-motion'
import { HeartIcon } from 'lucide-react'

export const MovieReviewLikeButton: FC<{
  composeKey: ComposeKeyMovieReviewUser
}> = ({ composeKey }) => {
  const [isReviewLiked, setIsReviewLiked] = useState(false)
  useIsMovieReviewLikedByUserQuery({
    variables: composeKey,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      console.log(data)
      setIsReviewLiked(isSome(data.movieReviewLikedByUser?.movieReviewId))
    }
  })

  const [markMovieReviewLiked] = useMarkMovieReviewLikedMutation()
  const [unmarkMovieReviewLiked] = useUnmarkMovieReviewLikedMutation()

  const handleMarkMovieReviewWatched = async () => {
    await markMovieReviewLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error liking movie review'
        })
      },
      onCompleted: () => {
        setIsReviewLiked(true)
      }
    })
  }

  const handleMovieReviewUnsetLiked = async () => {
    await unmarkMovieReviewLiked({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error unsetting movie review liked'
        })
      },
      onCompleted: () => {
        setIsReviewLiked(false)
      }
    })
  }

  const handleMovieReviewLiked = async () =>
    isReviewLiked
      ? await handleMovieReviewUnsetLiked()
      : await handleMarkMovieReviewWatched()

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
