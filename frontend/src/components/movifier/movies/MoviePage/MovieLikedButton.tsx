import { FC, useState } from 'react'
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

export const MovieLikedButton: FC<{
  composeKey: ComposeKeyMovieUser
  isSignedIn?: boolean
}> = ({ composeKey, isSignedIn = false }) => {
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
    await markMovieLiked({
      variables: composeKey,
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
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error unliking movie'
        })
      },
      onCompleted: () => {
        setIsMovieLiked(false)
      }
    })
  }

  const handleMovieLiked = async () =>
    isMovieLiked ? await handleMovieUnsetLiked() : await handleMovieSetLiked()

  return (
    <div className='flex flex-col items-center gap-2'>
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
            currentColor: isMovieLiked
          })}
          onClick={handleMovieLiked}
          className={cn('w-10 h-10 cursor-pointer', {
            'text-slate-700': !isMovieLiked,
            'text-red-500': isMovieLiked
          })}
        />
      </motion.div>
    </div>
  )
}
