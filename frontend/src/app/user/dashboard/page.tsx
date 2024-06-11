'use client'

import * as React from 'react'
import { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { gql } from '@apollo/client'
import {
  useGetRecentLikedMoviesQuery,
  useGetRecentWatchedMoviesQuery,
  useGetTotalMovieListsCreatedQuery,
  useGetTotalMovieReviewsWrittenQuery,
  useGetTotalMoviesInWatchlistQuery,
  useGetTotalMoviesLikedQuery,
  useGetTotalMoviesWatchedQuery
} from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { Skeleton } from '@/components/ui/skeleton'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import {
  CircleUser,
  ClockIcon,
  GalleryVerticalEnd,
  HeartIcon,
  MessageSquare,
  SquareArrowRight
} from 'lucide-react'
import { Link } from 'next-view-transitions'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { AppTooltip } from '@/components/movifier/generic'

const GetMoviesStats = gql`
  query GetTotalMoviesWatched($userId: String!) {
    movies(where: { watchedBy: { some: { userId: { equals: $userId } } } }) {
      id
    }
  }

  query GetTotalMoviesLiked($userId: String!) {
    movies(where: { likedBy: { some: { userId: { equals: $userId } } } }) {
      id
    }
  }

  query GetTotalMoviesInWatchlist($userId: String!) {
    movies(
      where: { inWatchlistByUsers: { some: { userId: { equals: $userId } } } }
    ) {
      id
    }
  }

  query GetTotalMovieListsCreated($userId: String!) {
    movieLists(
      where: { movieListAuthor: { is: { id: { equals: $userId } } } }
    ) {
      id
    }
  }

  query GetTotalMovieReviewsWritten($userId: String!) {
    movieReviews(where: { rating: { is: { userId: { equals: $userId } } } }) {
      id
    }
  }
`

const GetMoviesRecentActivity = gql`
  query GetRecentWatchedMovies($userId: String!, $take: Int! = 5) {
    movieWatchedByUsers(
      take: $take
      where: { userId: { equals: $userId } }
      orderBy: [{ createdAt: desc }]
    ) {
      movie {
        ...MovieCardItem
      }
    }
  }

  query GetRecentLikedMovies($userId: String!, $take: Int! = 5) {
    movieLikedByUsers(
      take: $take
      where: { userId: { equals: $userId } }
      orderBy: [{ createdAt: desc }]
    ) {
      movie {
        ...MovieCardItem
      }
    }
  }
`

export default function SettingsPage() {
  return <HomeDashboard />
}

export function HomeDashboard() {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const { setDashboardPageContext } = useDashboardPage()
  useEffect(() => {
    setDashboardPageContext((prev) => ({ ...prev, currentPage: 'Home' }))
  }, [])

  const { data: totalMoviesLikedData } = useGetTotalMoviesLikedQuery({
    variables: { userId: user?.id ?? '' },
    fetchPolicy: 'cache-and-network',
    skip: !isSignedIn
  })
  const { data: totalMoviesWatchedData } = useGetTotalMoviesWatchedQuery({
    variables: { userId: user?.id ?? '' },
    fetchPolicy: 'cache-and-network',
    skip: !isSignedIn
  })
  const { data: totalMoviesInWatchlistData } =
    useGetTotalMoviesInWatchlistQuery({
      variables: { userId: user?.id ?? '' },
      fetchPolicy: 'cache-and-network',
      skip: !isSignedIn
    })
  const { data: totalMovieListsCreatedData } =
    useGetTotalMovieListsCreatedQuery({
      variables: { userId: user?.id ?? '' },
      fetchPolicy: 'cache-and-network',
      skip: !isSignedIn
    })
  const { data: totalMovieReviewsWrittenData } =
    useGetTotalMovieReviewsWrittenQuery({
      variables: { userId: user?.id ?? '' },
      fetchPolicy: 'cache-and-network',
      skip: !isSignedIn
    })

  const { data: recentWatchedMoviesData } = useGetRecentWatchedMoviesQuery({
    variables: { userId: user?.id ?? '' },
    fetchPolicy: 'cache-and-network',
    skip: !isSignedIn
  })
  const { data: recentLikedMoviesData } = useGetRecentLikedMoviesQuery({
    variables: { userId: user?.id ?? '' },
    fetchPolicy: 'cache-and-network',
    skip: !isSignedIn
  })

  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
        <Breadcrumb className='hidden md:flex'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 h-dvh'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='flex gap-5 rounded-xl border bg-card text-card-foreground shadow p-5'>
            <CircleUser />
            <span>{user?.name}</span>
          </div>

          <div className='grid grid-cols-3 gap-5 mx-auto my-auto'>
            <Link href={'/user/dashboard/watched-movies'}>
              <Card
                className={'h-[10em] w-[10em] flex flex-col !justify-between'}
              >
                <CardHeader>
                  <CardTitle>Movies watched</CardTitle>
                </CardHeader>

                <CardContent className={'flex gap-5'}>
                  <p className='text-4xl font-bold'>
                    {totalMoviesWatchedData?.movies.length}
                  </p>
                  <EyeOpenIcon
                    color={'#b6aaaa'}
                    className={'my-auto h-auto w-[2em]'}
                  />
                </CardContent>
              </Card>
            </Link>

            <Link href={'/user/dashboard/liked'}>
              <Card
                className={'h-[10em] w-[10em] flex flex-col !justify-between'}
              >
                <CardHeader>
                  <CardTitle>Movies liked</CardTitle>
                </CardHeader>

                <CardContent className={'flex gap-5'}>
                  <p className='text-4xl font-bold'>
                    {totalMoviesLikedData?.movies.length}
                  </p>
                  <HeartIcon
                    color={'#b6aaaa'}
                    className={'my-auto h-auto w-[2em]'}
                  />
                </CardContent>
              </Card>
            </Link>

            <Link href={'/user/dashboard/watchlist'}>
              <Card
                className={'h-[10em] w-[10em] flex flex-col !justify-between'}
              >
                <CardHeader>
                  <CardTitle>Movies in watchlist</CardTitle>
                </CardHeader>

                <CardContent className={'flex gap-5'}>
                  <p className='text-4xl font-bold'>
                    {totalMoviesInWatchlistData?.movies.length}
                  </p>
                  <ClockIcon
                    color={'#b6aaaa'}
                    className={'my-auto h-auto w-[2em]'}
                  />
                </CardContent>
              </Card>
            </Link>

            <Link href={'/user/dashboard/movie-lists'}>
              <Card
                className={'h-[10em] w-[10em] flex flex-col !justify-between'}
              >
                <CardHeader>
                  <CardTitle>Movie lists created</CardTitle>
                </CardHeader>

                <CardContent className={'flex gap-5'}>
                  <p className='text-4xl font-bold'>
                    {totalMovieListsCreatedData?.movieLists.length}
                  </p>
                  <GalleryVerticalEnd
                    color={'#b6aaaa'}
                    className={'my-auto h-auto w-[2em]'}
                  />
                </CardContent>
              </Card>
            </Link>

            <Link href={'/user/dashboard/reviews'}>
              <Card
                className={'h-[10em] w-[10em] flex flex-col !justify-between'}
              >
                <CardHeader>
                  <CardTitle>Movie reviews</CardTitle>
                </CardHeader>

                <CardContent className={'flex gap-5'}>
                  <p className='text-4xl font-bold'>
                    {totalMovieReviewsWrittenData?.movieReviews.length}
                  </p>
                  <MessageSquare
                    color={'#b6aaaa'}
                    className={'my-auto h-auto w-[2em]'}
                  />
                </CardContent>
              </Card>
            </Link>
          </div>

          <Card>
            <CardHeader className='pb-3 w-full flex justify-between relative'>
              <CardTitle>Recently watched movies</CardTitle>
              <AppTooltip text={'See all watched movies'}>
                <Link href={'/user/dashboard/watched-movies'}>
                  <SquareArrowRight />
                </Link>
              </AppTooltip>
            </CardHeader>

            <Separator className={'mb-5'} />

            <CardContent>
              <MovieCardList
                movies={
                  recentWatchedMoviesData?.movieWatchedByUsers.map(
                    (watchedBy) => watchedBy.movie
                  ) ?? []
                }
              />
            </CardContent>
          </Card>

          <Card className=''>
            <CardHeader className='pb-3 w-full flex justify-between'>
              <CardTitle>Recently liked movies</CardTitle>
              <AppTooltip text={'See all liked movies'}>
                <Link href={'/user/dashboard/liked'}>
                  <SquareArrowRight />
                </Link>
              </AppTooltip>
            </CardHeader>

            <CardContent>
              <MovieCardList
                movies={
                  recentLikedMoviesData?.movieLikedByUsers.map(
                    (watchedBy) => watchedBy.movie
                  ) ?? []
                }
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
