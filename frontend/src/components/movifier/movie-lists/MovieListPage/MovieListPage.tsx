import React, { FC } from 'react'
import { gql } from '@apollo/client'
import {
  MovieListPageItemFragment,
  useGetUserLikedMovieIdsInMovieListSuspenseQuery,
  useGetUserWatchedMovieIdsInMovieListSuspenseQuery
} from '@/lib'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { Progress } from '@/components/ui/progress'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import { FilePenLine, HeartIcon } from 'lucide-react'
import { AppTooltip } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'

import { DeleteMovieListButton } from '@/components/movifier/movie-lists/DeleteMovieListButton'
import { MovieListLikedButton } from '@/components/movifier/movie-lists/MovieListLikedButton'
import { isSome } from '@/lib/types'

export const MovieListPageFragment = gql`
  fragment MovieListPageItem on MovieList {
    id
    name
    description
    tags

    movies {
      id
      ...MovieCardItem
    }

    comments(take: 5, orderBy: [{ createdAt: desc }]) {
      ...MovieListCommentCardItem
    }

    movieListAuthor {
      id
      username
    }
  }
`

export const GetUserWatchedMovieIds = gql`
  query GetUserWatchedMovieIdsInMovieList(
    $userId: String!
    $movieListId: String!
  ) {
    movies(
      where: {
        watchedBy: { some: { userId: { equals: $userId } } }
        movieLists: { some: { id: { equals: $movieListId } } }
      }
    ) {
      id
    }
  }
`

export const GetUserLikedMovieIds = gql`
  query GetUserLikedMovieIdsInMovieList(
    $userId: String!
    $movieListId: String!
  ) {
    movies(
      where: {
        likedBy: { some: { userId: { equals: $userId } } }
        movieLists: { some: { id: { equals: $movieListId } } }
      }
    ) {
      id
    }
  }
`

export const MovieListPage: FC<MovieListPageItemFragment> = ({
  id,
  name,
  description,
  movies,
  movieListAuthor,
  comments
}) => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const isAuthor = user?.id === movieListAuthor.id

  const { data: userWatchedMovieIdsData } =
    useGetUserWatchedMovieIdsInMovieListSuspenseQuery({
      refetchWritePolicy: 'overwrite',
      variables: {
        userId: user?.id ?? '',
        movieListId: id
      },
      fetchPolicy: 'cache-and-network'
    })
  const { data: userLikedMovieIdsData } =
    useGetUserLikedMovieIdsInMovieListSuspenseQuery({
      variables: {
        userId: user?.id ?? '',
        movieListId: id
      },
      fetchPolicy: 'cache-and-network'
    })

  const watchedPercent = Math.round(
    (userWatchedMovieIdsData?.movies.length / movies.length) * 100
  )
  const likedPercent = Math.round(
    (userLikedMovieIdsData?.movies.length / movies.length) * 100
  )

  return (
    <Card className={'h-full overflow-scroll'}>
      <CardHeader className={'relative'}>
        <CardTitle className={'text-3xl'}>{name}</CardTitle>
        <CardDescription>
          <article className={'prose-slate prose-lg whitespace-pre-line'}>
            {description}
          </article>
          <p className='text-sm text-gray-500'>
            By{' '}
            <span className={'underline hover:text-black'}>
              {movieListAuthor.username}
            </span>{' '}
          </p>
          <MovieListLikedButton
            className={'w-5 mt-5'}
            composeKey={{ movieListId: id, userId: user?.id ?? '' }}
            isSignedIn={isSignedIn}
          />
        </CardDescription>

        {isAuthor && (
          <div className={'absolute flex flex-col right-10 gap-3'}>
            <AppTooltip text={'Edit movie list'}>
              <Link href={`/movie-lists/${id}/edit`}>
                <Button>
                  <FilePenLine />
                </Button>
              </Link>
            </AppTooltip>
            <AppTooltip text={'Delete movie list'}>
              <Button variant={'destructive'}>
                <DeleteMovieListButton id={id} />
              </Button>
            </AppTooltip>
          </div>
        )}
      </CardHeader>

      <Separator className={'mb-10'} />

      <CardContent className={'h-[80%]'}>
        <div className='grid grid-cols-[60%_40%] gap-2 h-full'>
          <div className='pb-10'>
            <MovieCardList movies={movies} />
          </div>

          <div className='flex gap-5 w-full'>
            <Separator orientation={'vertical'} />

            <div className={'flex flex-col gap-2 w-full'}>
              <Card className={'h-min w-full'}>
                <CardHeader>
                  <CardTitle>Watched Movies</CardTitle>
                  <CardDescription>
                    <EyeOpenIcon className={'h-[2.5em] w-auto'} />
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className={'flex align-baseline gap-5 items-baseline'}
                >
                  <Progress value={watchedPercent} />
                  <h1 className={'text-3xl font-bold'}>{watchedPercent}%</h1>
                </CardContent>
                <CardFooter>
                  <p className={'text-xs italic'}>
                    You've watched {userWatchedMovieIdsData.movies.length ?? 0}{' '}
                    of {movies.length} movies in this list
                  </p>
                </CardFooter>
              </Card>

              <Card className={'h-min w-full'}>
                <CardHeader>
                  <CardTitle>Liked Movies</CardTitle>
                  <CardDescription>
                    <HeartIcon className={'h-[2.5em] w-auto'} />
                  </CardDescription>
                </CardHeader>
                <CardContent
                  className={'flex align-baseline gap-5 items-baseline'}
                >
                  <Progress value={likedPercent} />
                  <h1 className={'text-3xl font-bold'}>{likedPercent}%</h1>
                </CardContent>
                <CardFooter>
                  <p className={'text-xs italic'}>
                    You've liked {userLikedMovieIdsData.movies.length ?? 0} of{' '}
                    {movies.length} movies in this list
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
