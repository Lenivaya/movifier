import { FC, useState } from 'react'
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

export const MovieWatchedButton: FC<{
  composeKey: ComposeKeyMovieUser
  isSignedIn?: boolean
}> = ({ composeKey, isSignedIn = false }) => {
  const [isMovieWatched, setIsMovieWatched] = useState(false)
  useIsMovieWatchedByUserQuery({
    variables: composeKey,
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      console.log(data)
      setIsMovieWatched(isSome(data.movieWatchedByUser?.movieId))
    }
  })

  const [markMovieWatched] = useMarkMovieWatchedMutation()
  const [unmarkMovieWatched] = useUnmarkMovieWatchedMutation()

  const handleMovieSetWatched = async () => {
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
      }
    })
  }

  const handleMovieWatched = async () =>
    isMovieWatched
      ? await handleMovieUnsetWatched()
      : await handleMovieSetWatched()

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
        <EyeIcon
          onClick={handleMovieWatched}
          className={cn('w-10 h-10 cursor-pointer', {
            'text-slate-700': !isMovieWatched,
            'text-green-500': isMovieWatched
          })}
        />
      </motion.div>
    </div>
  )
}
