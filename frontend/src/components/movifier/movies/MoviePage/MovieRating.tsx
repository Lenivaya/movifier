import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import { toast } from '@/components/ui/use-toast'
import {
  IsMovieWatchedByUserDocument,
  useDeleteMovieRatingForUserMutation,
  useGetMovieRatingByUserQuery,
  useMarkMovieWatchedMutation,
  useUpsertMovieRatingForUserMutation
} from '@/lib'
import { gql } from '@apollo/client'
import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'
import { MessageSquareText, X } from 'lucide-react'
import { FC, useCallback, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { AppTooltip } from '@/index'
import { Separator } from '@/components/ui'
import { Option } from '@mobily/ts-belt'
import { isSome } from '@/lib/types'
import { CreateReviewForm } from '@/components/movifier/movie-reviews/forms/CreateReviewForm'

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
  const [ratingId, setRatingId] = useState<Option<string>>(null)
  const isRated = rating !== 0

  useGetMovieRatingByUserQuery({
    variables: props.composeKey,
    fetchPolicy: 'cache-and-network',
    onCompleted: ({ movieRating }) => {
      if (!movieRating) return
      setRating(movieRating.rating)
      setRatingId(movieRating.id)
    }
  })

  const [upsertRating] = useUpsertMovieRatingForUserMutation()
  const [markWatched] = useMarkMovieWatchedMutation()

  const onRatingChangedSetWatched = useCallback(async () => {
    await markWatched({
      variables: props.composeKey,
      refetchQueries: [IsMovieWatchedByUserDocument],
      onError: (error) => {
        toast({
          title: 'Error marking movie watched'
        })
        console.error(error)
      }
    })
  }, [props.composeKey])

  const onRatingChange = useCallback(
    async (change: number) => {
      await upsertRating({
        variables: { ...props.composeKey, rating: change },
        onCompleted: ({ upsertOneMovieRating }) => {
          if (!upsertOneMovieRating) return
          setRating(upsertOneMovieRating.rating)
          setRatingId(upsertOneMovieRating.id)
          if (!isRated) onRatingChangedSetWatched()
        },
        onError: (error) => {
          toast({
            title: 'Error rating movie'
          })
          console.error(error)
        }
      })
    },
    [onRatingChangedSetWatched, props.composeKey, isRated]
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
    <div
      className={
        'flex flex-row gap-2 align-baseline content-baseline ml-5 mr-5'
      }
    >
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
        className='w-auto'
        value={rating}
        radius={'large'}
        items={10}
        itemStyles={{
          itemShapes: ThinStar,
          activeFillColor: '#3fc400',
          inactiveFillColor: '#383833'
        }}
        onChange={onRatingChange}
      />

      {isRated && isSome(ratingId) && (
        <AppTooltip text={'Create or update review for given rating'}>
          <>
            <Separator orientation={'vertical'} />
            <CreateMovieReviewButton ratingId={ratingId} />
          </>
        </AppTooltip>
      )}
    </div>
  )
}

export const CreateMovieReviewButton: FC<{ ratingId: string }> = ({
  ratingId
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MessageSquareText className='cursor-pointer h-full' />
      </DialogTrigger>
      <DialogContent className='min-h-[65vh]'>
        <DialogHeader>
          <DialogTitle>Create movie review</DialogTitle>
          <DialogDescription>
            Leave your thoughts on movie besides giving it a rating.
          </DialogDescription>
        </DialogHeader>

        <CreateReviewForm ratingId={ratingId} />
      </DialogContent>
    </Dialog>
  )
}
