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
import { cn, MovieCardItemFragment } from '@/lib/'
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
import { FilePenLine } from 'lucide-react'
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
      <Card className={''}>
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

        <CardFooter>
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
    </motion.div>
  )
}
