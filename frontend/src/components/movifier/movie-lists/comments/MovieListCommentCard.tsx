import { gql } from '@apollo/client'
import { MovieListCommentCardItemFragment } from '@/lib'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui'

export const MovieListCommentCardFragment = gql`
  fragment MovieListCommentCardItem on MovieListComment {
    id
    content

    user {
      username
    }

    createdAt
  }
`

export function MovieListCommentCard(
  comment: MovieListCommentCardItemFragment
) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{comment.user.username}</CardTitle>
      </CardHeader>

      <CardContent>
        <article className={'prose prose-2xl prose-slate whitespace-pre-line'}>
          {comment.content}
        </article>
      </CardContent>
    </Card>
  )
}
