import { FC } from 'react'
import { usePopularMovieReviewsSuspenseQuery } from '@/lib'
import { isSome } from '@/lib/types'
import { MovieReviewCard } from '@/components/movifier/movie-reviews/MovieReviewCard/MovieReviewCard'
import { gql } from '@apollo/client'

export const GET_POPULAR_MOVIE_REVIEWS = gql`
  query PopularMovieReviews($movieId: String!, $take: Int = 5, $skip: Int = 0) {
    movieReviews(
      where: { rating: { is: { movieId: { equals: $movieId } } } }
      orderBy: [{ likedBy: { _count: desc } }]
      take: $take
      skip: $skip
    ) {
      ...MovieReviewCardItem
    }
  }
`

export const MoviePageTopPopularReviewsList: FC<{ movieId: string }> = ({
  movieId
}) => {
  const { data } = usePopularMovieReviewsSuspenseQuery({
    variables: { movieId: movieId },
    fetchPolicy: 'cache-and-network'
  })

  const isSomeReviews =
    isSome(data?.movieReviews) && data?.movieReviews.length > 0
  if (!isSomeReviews) return null

  return (
    <div className={'flex flex-col gap-5 mt-5 '}>
      <h1 className={'font-bold'}>Popular reviews</h1>

      <div className={'flex flex-col gap-5'}>
        {data.movieReviews.map((review) => (
          <MovieReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  )
}
