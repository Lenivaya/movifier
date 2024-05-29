import { FC, useState } from 'react'
import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import {
  cn,
  useAddMovieToUserWatchlistMutation,
  useIsMovieInUserWatchlistQuery,
  useRemoveMovieFromWatchlistMutation
} from '@/lib'
import { isSome } from '@/lib/types'
import { toast } from '@/components/ui/use-toast'
import { apolloObjectRemover } from '@/lib/graphql/ApolloClient/cache/helpers/utils'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export const MovieWatchListButton: FC<{
  composeKey: ComposeKeyMovieUser
  isSignedIn?: boolean
}> = ({ composeKey, isSignedIn = false }) => {
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(false)
  useIsMovieInUserWatchlistQuery({
    variables: composeKey,
    skip: !isSignedIn,
    fetchPolicy: 'cache-and-network',
    onCompleted: (data) => {
      setIsMovieInWatchlist(isSome(data.userMovieWatchlist?.movieId))
    }
  })

  const [addMovieToWatchList] = useAddMovieToUserWatchlistMutation()
  const [removeMovieFromWatchList] = useRemoveMovieFromWatchlistMutation()

  const handleAddMovieToWatchList = async () => {
    await addMovieToWatchList({
      variables: composeKey,
      onError: (error) => {
        console.error(error.message)
        toast({
          title: 'Error adding movie to watchlist'
        })
      },
      onCompleted: () => {
        setIsMovieInWatchlist(true)
        toast({
          title: 'Movie added to watchlist'
        })
      }
    })
  }

  const handleRemoveMovieFromWatchList = async () => {
    await removeMovieFromWatchList({
      variables: composeKey,
      onError: (error) => {
        console.error(error)
        toast({
          title: 'Error removing movie from watchlist'
        })
      },
      onCompleted: () => {
        setIsMovieInWatchlist(false)
      },
      update: (cache, { data, errors }) => {
        apolloObjectRemover(cache, data?.deleteOneUserMovieWatchlist, errors)
      }
    })
  }

  const handleMovieWatchList = async () =>
    isMovieInWatchlist
      ? await handleRemoveMovieFromWatchList()
      : await handleAddMovieToWatchList()

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
        <Clock
          onClick={handleMovieWatchList}
          className={cn('w-10 h-10 cursor-pointer', {
            'text-slate-700': !isMovieInWatchlist,
            'text-blue-500': isMovieInWatchlist
          })}
        />
      </motion.div>
    </div>
  )
}
