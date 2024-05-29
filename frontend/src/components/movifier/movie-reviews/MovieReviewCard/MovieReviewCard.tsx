import { FC } from 'react'
import { gql } from '@apollo/client'
import { Card, CardContent, CardHeader } from '@/components/ui'
import { Rating as ReactRating, ThinStar } from '@smastrom/react-rating'
import { MovieReviewCardItemFragment } from '@/lib'
import { Link } from 'next-view-transitions'
import { MovieReviewLikeButton } from '@/components/movifier/movie-reviews/MovieReviewCard/MovieReviewLikeButton'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'

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

    _count {
      likedBy
    }
  }
`

const MAX_RATING = 10

export const MovieReviewCard: FC<MovieReviewCardItemFragment> = ({
  id,
  content,
  rating,
  _count
}) => {
  const user = useCurrentUser()
  const composeKey = { movieReviewId: id, userId: user?.id ?? '' }
  const likesCount = _count?.likedBy

  return (
    <Card>
      <CardHeader>
        <div className='flex flex-row gap-3 align-baseline content-baseline text-sm'>
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

        <div className={'mt-5 flex flex-row items-center gap-3'}>
          <MovieReviewLikeButton composeKey={composeKey} />
          <span className={'text-xs'}>
            <span className={'mr-0.5'}>{likesCount}</span> Likes
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
