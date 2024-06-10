'use client'

import * as React from 'react'
import { useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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
import {
  useGetUserCreatedMovieListsQuery,
  useGetUserLikedMovieListsQuery
} from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { MovieListsPage } from '@/components/movifier/movie-lists/MovieListsPage/MovieListsPage'
import { MovieListCardList } from '@/components/movifier/movie-lists/MovieListCardList'

const GET_USER_CREATED_MOVIE_LISTS = gql`
  query GetUserCreatedMovieLists(
    $searchCriteria: MovieListSearchCriteriaInput!
    $userId: String!
  ) {
    searchMovieLists(
      searchCriteria: $searchCriteria
      where: { movieListAuthor: { is: { id: { equals: $userId } } } }
    ) {
      ...MovieListCardItem
    }
  }
`

const GET_USER_LIKED_MOVIE_LISTS = gql`
  query GetUserLikedMovieLists(
    $searchCriteria: MovieListSearchCriteriaInput!
    $userId: String!
  ) {
    searchMovieLists(
      searchCriteria: $searchCriteria
      where: { likedBy: { some: { userId: { equals: $userId } } } }
    ) {
      ...MovieListCardItem
    }
  }
`

export default function DashboardMovieListsPage() {
  return <MovieLists />
}

export function MovieLists() {
  const user = useCurrentUser()
  const { setDashboardPageContext } = useDashboardPage()

  useEffect(() => {
    setDashboardPageContext((prev) => ({
      ...prev,
      currentPage: 'MovieLists'
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
                <Link href='#'>Movie lists</Link>
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
                <CardTitle>Movie lists</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Movies lists you created or liked
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue={'created'}>
            <TabsList
              className={'grid-cols-2 grid mx-auto justify-center items-center'}
            >
              <TabsTrigger value={'created'}>Created by me</TabsTrigger>
              <TabsTrigger value={'liked'}>Liked</TabsTrigger>
            </TabsList>

            <TabsContent value={'created'}>
              <Card>
                <CardContent className={'!pb-0 !pl-0 !pr-0 min-h-full'}>
                  <div className='h-full'>
                    <MovieListsPage
                      render={(searchCriteria) => {
                        const { data } = useGetUserCreatedMovieListsQuery({
                          variables: {
                            searchCriteria,
                            userId: user?.id ?? ''
                          },
                          fetchPolicy: 'cache-and-network'
                        })

                        return (
                          <MovieListCardList
                            movieLists={data?.searchMovieLists}
                          />
                        )
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value={'liked'}>
              <Card>
                <CardContent className={'!pb-0 !pl-0 !pr-0 min-h-full'}>
                  <div className='h-full'>
                    <MovieListsPage
                      render={(searchCriteria) => {
                        const { data } = useGetUserLikedMovieListsQuery({
                          variables: {
                            searchCriteria,
                            userId: user?.id ?? ''
                          },
                          fetchPolicy: 'cache-and-network'
                        })

                        return (
                          <MovieListCardList
                            movieLists={data?.searchMovieLists}
                          />
                        )
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
