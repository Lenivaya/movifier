import React, { FC, HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { gql } from '@apollo/client'
import {
  cn,
  MovieCardItemFragment,
  MovieCardStatsItemFragment,
  useGetMovieCardStatsQuery
} from '@/lib/'
import { Separator } from '@/components/ui'
import { Link } from 'next-view-transitions'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import { MovieWatchedButton } from '@/components/movifier/movies/MovieWatchedButton'
import { isSome } from '@/lib/types'
import { MovieLikedButton } from '@/components/movifier/movies/MovieLikedButton'
import { MovieWatchListButton } from '@/components/movifier/movies/MovieWatchListButton'
import { useHover } from '@uidotdev/usehooks'
import { AppTooltip } from '@/components/movifier/generic'
import {
  EyeIcon,
  FilePenLine,
  HeartIcon,
  ListIcon,
  Star,
  StarHalf
} from 'lucide-react'
import { DeleteMovieButton } from '@/components/movifier/movies/MovieCard/DeleteMovieButton'

export const MovieCardFragment = gql`
  fragment MovieCardItem on Movie {
    id

    movieInfo {
      id
      title
      posterUrl
    }
  }
`

export const MovieCard: FC<
  MovieCardItemFragment & HTMLAttributes<HTMLDivElement>
> = ({ movieInfo, id, className }) => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = isSignedIn && user?.role === 'ADMIN'

  const composeKey: ComposeKeyMovieUser = {
    movieId: id,
    userId: user?.id ?? ''
  }

  const [hoveringRef, hovering] = useHover()

  return (
    <motion.div
      className={cn(
        'flex flex-col justify-between max-w-52 w-52 relative group',
        className
      )}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 }
      }}
      transition={{ type: 'spring', duration: 0.8 }}
    >
      <Card className={'relative'}>
        <CardHeader
          ref={hoveringRef}
          className={'!m-0 p-0 hover:shadow-lg relative'}
        >
          <Link href={`/movies/${id}`} passHref>
            <img
              src={movieInfo?.posterUrl ?? ''}
              alt={movieInfo?.title ?? ''}
              className='object-fill w-full'
            ></img>
          </Link>

          {hovering && (
            <div className='absolute bottom-5 flex-row items-center gap-1 hidden group-hover:flex h-[3em] w-full p-3 bg-black/80'>
              <MovieWatchedButton
                className={'w-1/3 h-full'}
                composeKey={composeKey}
                isSignedIn={isSignedIn}
              />
              <MovieLikedButton
                className={'w-1/3 h-full'}
                composeKey={composeKey}
                isSignedIn={isSignedIn}
              />
              <MovieWatchListButton
                className={'w-1/3 h-full'}
                composeKey={composeKey}
                isSignedIn={isSignedIn}
              />
            </div>
          )}
        </CardHeader>

        <Separator orientation={'horizontal'} className={'mb-5'} />

        <CardContent>
          <CardTitle className={'text-center'}>{movieInfo?.title}</CardTitle>
        </CardContent>

        <CardFooter className={'relative'}>
          {isAdmin && (
            <div className={'grid grid-cols-2 mx-auto gap-5'}>
              <Link
                href={`/movies/${id}/edit`}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <AppTooltip text={'Edit movie'}>
                  <FilePenLine />
                </AppTooltip>
              </Link>

              <DeleteMovieButton id={id} />
            </div>
          )}
        </CardFooter>
      </Card>
      {/*<MovieCardStats id={id} />*/}
    </motion.div>
  )
}

const MovieCardStatsFragment = gql`
  fragment MovieCardStatsItem on Movie {
    id
    statsSummary {
      totalLikes
      totalViews
      appearancesInLists
      avgRating
    }
  }
`

const GetMovieCardStats = gql`
  query GetMovieCardStats($id: String!) {
    movie(where: { id: $id }) {
      ...MovieCardStatsItem
    }
  }
`

function MovieCardStats({ id }: { id: string }) {
  const { data } = useGetMovieCardStatsQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className='flex-col items-center hidden group-hover:flex h-[3em] w-full p-2 mt-2 mb-2'>
      <Separator className={'mb-2'} />

      <div className='flex items-center gap-4'>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className={'w-full h-min flex flex-col gap-1'}
        >
          <EyeIcon
            className={cn('cursor-pointer w-full h-[1em] text-green-500')}
          />
          <span className={'text-sm'}>
            {data?.movie?.statsSummary.totalViews}
          </span>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className={'w-full h-min flex flex-col'}
        >
          <HeartIcon
            fill={'currentColor'}
            className={cn('cursor-pointer w-full h-[1em] text-red-500')}
          />
          {data?.movie?.statsSummary.totalLikes}
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className={'w-full h-min flex flex-col'}
        >
          <ListIcon
            fill={'currentColor'}
            className={cn('cursor-pointer w-full h-[1em] text-amber-500')}
          />
          {data?.movie?.statsSummary.appearancesInLists}
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 }
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className={'w-full h-min flex flex-col'}
        >
          <Star
            fill={'currentColor'}
            className={cn('cursor-pointer w-full h-[1em] text-violet-500')}
          />
          {data?.movie?.statsSummary.avgRating}
        </motion.div>
      </div>
    </div>
  )
}
