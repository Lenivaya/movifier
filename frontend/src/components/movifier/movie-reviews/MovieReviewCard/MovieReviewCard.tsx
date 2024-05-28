import { FC } from 'react'
import { gql } from '@apollo/client'
import { Card, CardContent, CardHeader } from '@/components/ui'
import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'
import { MovieReviewCardItemFragment } from '@/lib'
import { Link } from 'next-view-transitions'
import { MovieReviewLikeButton } from '@/components/movifier/movie-reviews/MovieReviewCard/MovieReviewLikeButton'

export const MovieReviewCardFragment = gql`
  fragment MovieReviewCardItem on MovieReview {
    id
    content

    rating {
      id
      rating

      user {
        id
        username
      }
    }
  }
`

const MAX_RATING = 10

export const MovieReviewCard: FC<MovieReviewCardItemFragment> = ({
  id,
  content,
  rating
}) => {
  const composeKey = { movieReviewId: id, userId: rating.user.id }

  return (
    <Card>
      <CardHeader>
        <div className='flex flex-row gap-3 align-baseline content-baseline text-md'>
          <Link href={`/users/${rating.user.id}/reviews/${id}`}>
            <span className={'text-slate-500 hover:text-black'}>
              Review by{' '}
            </span>
            <span className={'font-semibold'}>{rating.user.username}</span>
          </Link>
          <div className={'flex flex-row gap-2'}>
            <ReactRating
              className='max-w-[10em]'
              readOnly
              value={rating.rating}
              radius={'large'}
              items={10}
              itemStyles={{
                itemShapes: ThinStar,
                activeFillColor: '#3fc400',
                inactiveFillColor: '#383833'
              }}
            />
            <span className={'text-[#3fc400] font-semibold'}>
              {rating.rating}/{MAX_RATING}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <article className={'prose prose-sm whitespace-pre-line'}>
          {content}
        </article>

        <div className={'mt-5'}>
          <MovieReviewLikeButton composeKey={composeKey} />
        </div>
      </CardContent>
    </Card>
  )
}
