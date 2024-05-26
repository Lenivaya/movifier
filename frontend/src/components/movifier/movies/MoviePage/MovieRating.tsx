import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import { useCallback, useState } from 'react'
import {
  useDeleteMovieRatingForUserMutation,
  useGetMovieRatingByUserQuery,
  useUpsertMovieRatingForUserMutation
} from '@/lib'
import { toast } from '@/components/ui/use-toast'
import { X } from 'lucide-react'
import { Separator } from '@/components/ui'
import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'
import { gql } from '@apollo/client'

export const GET_MOVIE_RATING_BY_USER = gql`
  query GetMovieRatingByUser($movieId: String!, $userId: String!) {
    movieRating(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      id
      rating
    }
  }
`
export const UPSERT_MOVIE_RATING_FOR_USER = gql`
  mutation UpsertMovieRatingForUser(
    $movieId: String!
    $userId: String!
    $rating: Int!
  ) {
    upsertOneMovieRating(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
      update: { rating: { set: $rating } }
      create: {
        rating: $rating
        user: { connect: { id: $userId } }
        movie: { connect: { id: $movieId } }
      }
    ) {
      id
      rating
    }
  }
`
export const DELETE_MOVIE_RATING_FOR_USER = gql`
  mutation DeleteMovieRatingForUser($movieId: String!, $userId: String!) {
    deleteOneMovieRating(
      where: { userId_movieId: { movieId: $movieId, userId: $userId } }
    ) {
      id
    }
  }
`

export function MovieRating(props: { composeKey: ComposeKeyMovieUser }) {
  const [rating, setRating] = useState(0)
  const isRated = rating !== 0

  useGetMovieRatingByUserQuery({
    variables: props.composeKey,
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ movieRating }) => {
      if (!movieRating) return
      setRating(movieRating.rating)
    }
  })

  const [upsertRating] = useUpsertMovieRatingForUserMutation()
  const onRatingChange = useCallback(
    async (change: number) => {
      setRating(change)
      await upsertRating({
        variables: { ...props.composeKey, rating: change },
        onCompleted: ({ upsertOneMovieRating }) => {
          if (!upsertOneMovieRating) return
          setRating(upsertOneMovieRating.rating)
        },
        onError: (error) => {
          toast({
            title: 'Error rating movie'
          })
          console.error(error)
        }
      })
    },
    [props.composeKey, upsertRating]
  )

  const [deleteRating] = useDeleteMovieRatingForUserMutation()
  const handleDeleteRating = async () =>
    await deleteRating({
      variables: props.composeKey,
      onCompleted: () => setRating(0),
      onError: (error) => {
        toast({
          title: 'Error deleting rating'
        })
        console.error(error)
      }
    })

  return (
    <div className={'flex flex-row gap-2 align-baseline content-baseline'}>
      {isRated && (
        <>
          <X
            className='cursor-pointer mb-0 h-full scale-75'
            onClick={handleDeleteRating}
          />
          <Separator orientation={'vertical'} />
        </>
      )}

      <ReactRating
        style={{ maxWidth: 200 }}
        value={rating}
        radius={'large'}
        itemStyles={{
          itemShapes: ThinStar,
          activeFillColor: '#3fc400',
          inactiveFillColor: '#383833'
        }}
        onChange={onRatingChange}
      />
    </div>
  )
}
