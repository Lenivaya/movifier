import { FC } from 'react'
import { useRecentMovieReviewsSuspenseQuery } from '@/lib'
import { isSome } from '@/lib/types'
import { MovieReviewCard } from '@/components/movifier/movie-reviews/MovieReviewCard/MovieReviewCard'
import { gql } from '@apollo/client'

export const GET_RECENT_MOVIE_REVIEWS = gql`
  query RecentMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
    movieReviews(
      orderBy: [{ updatedAt: desc }]
      where: { rating: { is: { movieId: { equals: $movieId } } } }
      take: $take
      skip: $skip
    ) {
      ...MovieReviewCardItem
    }
  }
`
export const MoviePageTopRecentReviewsList: FC<{ movieId: string }> = ({
  movieId
}) => {
  const { data } = useRecentMovieReviewsSuspenseQuery({
    variables: { movieId },
    fetchPolicy: 'cache-and-network'
  })

  const isSomeReviews =
    isSome(data?.movieReviews) && data?.movieReviews.length > 0
  if (!isSomeReviews) return null

  return (
    <div className={'flex flex-col gap-5 mt-5'}>
      <h1 className={'font-bold'}>Recent reviews</h1>

      <div className={'flex flex-col gap-5'}>
        {data.movieReviews.map((review) => (
          <MovieReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  )
}
