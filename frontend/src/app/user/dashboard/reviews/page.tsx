'use client'

import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import * as React from 'react'
import { useEffect } from 'react'
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
  UserMovieReviewCardItemFragment,
  useSearchUserMovieReviewsSuspenseQuery
} from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { MoviesPage } from '@/components/movifier/movies/MoviesPage/MoviesPage'
import { Link } from 'next-view-transitions'
import { MovieCard } from '@/components/movifier/movies/MovieCard'
import { ArrowDown } from 'lucide-react'
import { MAX_RATING } from '@/components/movifier/movie-reviews/MovieReviewCard/MovieReviewCard'

export default function DashboardReviewsPage() {
  return <Reviews />
}

export function Reviews() {
  const user = useCurrentUser()
  const { setDashboardPageContext } = useDashboardPage()

  useEffect(() => {
    setDashboardPageContext((prev) => ({ ...prev, currentPage: 'Reviews' }))
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
                <Link href='#'>Reviews</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='grid'>
            <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
              <CardHeader className='pb-3 w-full'>
                <CardTitle>Your reviews</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Here are the reviews you've created
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardContent className={'!pb-0 !pl-0 !pr-0 min-h-full'}>
              <MoviesPage
                hideOrdering
                render={(searchCriteria, _orderBy) => {
                  const { data } = useSearchUserMovieReviewsSuspenseQuery({
                    variables: {
                      searchCriteria,
                      userId: user?.id ?? ''
                    },
                    fetchPolicy: 'cache-and-network'
                  })

                  return (
                    <div className='flex flex-wrap justify-center gap-5 h-min'>
                      {data.movieReviewsSearchWithMovies.map((review) => (
                        <UserMovieReviewCard key={review.id} {...review} />
                      ))}
                    </div>
                  )
                }}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

const UserMovieReviewCardFragment = gql`
  fragment UserMovieReviewCardItem on MovieReview {
    id
    createdAt
    content

    rating {
      id
      rating

      movie {
        id
        ...MovieCardItem
      }
    }
  }
`

const SearchUserMovieReviews = gql`
  query SearchUserMovieReviews(
    $searchCriteria: MoviesSearchCriteriaInput!
    $userId: String!
  ) {
    movieReviewsSearchWithMovies(
      searchCriteria: $searchCriteria
      where: { rating: { is: { userId: { equals: $userId } } } }
    ) {
      id
      ...UserMovieReviewCardItem
    }
  }
`

function UserMovieReviewCard(review: UserMovieReviewCardItemFragment) {
  return (
    <div
      className={
        'bg-white border bg-card text-card-foreground rounded-xl shadow flex flex-col p-5 gap-5 justify-center items-center content-center  flex-1 flex-grow'
      }
    >
      <MovieCard {...review.rating.movie} />

      <ArrowDown />

      <Card>
        <CardHeader>
          <div className='flex flex-row gap-3 align-baseline content-baseline text-sm'>
            <div className={'flex flex-row gap-2'}>
              <ReactRating
                className='max-w-[10em]'
                readOnly
                value={review.rating.rating}
                radius={'large'}
                items={10}
                itemStyles={{
                  itemShapes: ThinStar,
                  activeFillColor: '#3fc400',
                  inactiveFillColor: '#383833'
                }}
              />
              <span className={'text-[#3fc400] font-semibold'}>
                {review.rating.rating}/{MAX_RATING}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <article className={'prose prose-sm whitespace-pre-line'}>
            {review.content}
          </article>
        </CardContent>
      </Card>
    </div>
  )
}
