'use client'

import * as React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { gql } from '@apollo/client'
import { useGetUserWatchedMoviesSuspenseQuery } from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { MoviesPage } from '@/components/movifier/movies/MoviesPage/MoviesPage'
import { isSome } from '@/lib/types'

const GET_USER_WATCHED_MOVIES = gql`
  query GetUserWatchedMovies(
    $searchCriteria: MoviesSearchCriteriaInput!
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
    $userId: String!
  ) {
    searchMovies(
      searchCriteria: $searchCriteria
      orderBy: $orderBy
      where: { watchedBy: { some: { userId: { equals: $userId } } } }
    ) {
      ...MovieCardItem
    }
  }
`

export default function DashboardWatchedMoviesPage() {
  return <WatchedMovies />
}

export function WatchedMovies() {
  const user = useCurrentUser()
  const { setDashboardPageContext } = useDashboardPage()

  useEffect(() => {
    setDashboardPageContext((prev) => ({
      ...prev,
      currentPage: 'WatchedMovies'
    }))
  }, [])

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
                <Link href='#'>Watched</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 h-dvh'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='grid'>
            <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
              <CardHeader className='pb-3 w-full'>
                <CardTitle>Your watched movies</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Movies you've already watched
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className={'min-h-full'}>
            <CardContent>
              <div className='h-full'>
                <MoviesPage
                  render={(
                    searchCriteria,
                    orderBy,
                    _pagination,
                    setPagination,
                    _paginationResult
                  ) => {
                    const { data } = useGetUserWatchedMoviesSuspenseQuery({
                      variables: {
                        searchCriteria,
                        orderBy: isSome(orderBy) ? [orderBy] : [],
                        userId: user?.id ?? ''
                      },
                      fetchPolicy: 'cache-and-network'
                    })

                    useEffect(() => {
                      setPagination((prev) => ({
                        ...prev,
                        currentPage: 1,
                        totalCount: data?.searchMovies.length
                      }))
                    }, [data])

                    return <MovieCardList movies={data?.searchMovies} />
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
