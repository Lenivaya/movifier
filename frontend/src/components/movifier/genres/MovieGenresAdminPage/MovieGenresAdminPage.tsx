import * as React from 'react'
import {
  useGetMovieGenresForAdminQuery,
  useGetMovieGenresForAdminSuspenseQuery
} from '@/lib'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Link } from 'next-view-transitions'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { MovieGenreCard } from '@/components/movifier/genres/MovieGenreCard/MovieGenreCard'
import { motion } from 'framer-motion'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { gql } from '@apollo/client'
import {
  ClientSideOffsetPagination,
  IClientSideOffsetPagination,
  IClientSideOffsetPaginationResult
} from '@/components/movifier/generic/pagination/ClientSideOffsetPagination/ClientSideOffsetPagination'
import { useEffect, useState } from 'react'
import { useMutative } from 'use-mutative'

const GET_MOVIE_GENRES = gql`
  query GetMovieGenresForAdmin {
    genres {
      ...MovieGenreCardItem
    }
  }
`

export const DEFAULT_PAGE_SIZE = 6

const DEFAULT_PAGINATION: IClientSideOffsetPagination = {
  currentPage: 1,
  totalCount: 0,
  pageSize: DEFAULT_PAGE_SIZE * 10
}

const DEFAULT_PAGINATION_RESULT: IClientSideOffsetPaginationResult = {
  startIndex: 0,
  endIndex: DEFAULT_PAGE_SIZE
}

export function MovieGenresAdminPage() {
  const { data } = useGetMovieGenresForAdminSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })

  const [pagination, setPagination] =
    useState<IClientSideOffsetPagination>(DEFAULT_PAGINATION)
  const [paginationResult, setPaginationResult] =
    useMutative<IClientSideOffsetPaginationResult>(DEFAULT_PAGINATION_RESULT)

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      currentPage: 1,
      totalCount: data?.genres.length
    }))
  }, [data])

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
                <Link href='#'>Genres</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 h-dvh'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='grid'>
            <Card className='sm:col-span-2'>
              <CardHeader className='pb-3 w-full'>
                <CardTitle>Genres</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Manage movie genres here
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className={'h-[80vh] relative flex flex-col justify-between'}>
            <CardContent>
              <div className='grid grid-cols-3 justify-center gap-5 m-5'>
                {data?.genres
                  .slice(paginationResult.startIndex, paginationResult.endIndex)
                  .map((genre) => <MovieGenreCard key={genre.id} {...genre} />)}
              </div>

              <Link href={'/movies/genres/new'} passHref>
                <motion.div
                  className='fixed z-50 bottom-[90px] -right-10 focus:ring-0 focus:ring-transparent focus:ring-offset-0'
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ x: -90 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                >
                  <PlusCircledIcon
                    opacity={100}
                    className={'h-[2.5em] w-auto'}
                  />
                </motion.div>
              </Link>
            </CardContent>
            <div className='sticky bottom-0 pt-3 h-[6vh] w-full overflow-hidden bg-neutral-100/80 transition-all hover:h-[8vh] dark:bg-transparent/60'>
              <ClientSideOffsetPagination
                pagination={pagination}
                setPagination={setPagination}
                paginationResult={paginationResult}
                setPaginationResult={setPaginationResult}
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
