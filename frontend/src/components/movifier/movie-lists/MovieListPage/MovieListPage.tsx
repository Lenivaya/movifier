import { FC } from 'react'
import { gql } from '@apollo/client'
import { MovieListPageItemFragment } from '@/lib'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'

export const MovieListPageFragment = gql`
  fragment MovieListPageItem on MovieList {
    id
    name
    description
    tags

    movies {
      id
      ...MovieCardItem
    }

    movieListAuthor {
      id
      username
    }
  }
`

export const MovieListPage: FC<MovieListPageItemFragment> = ({
  name,
  description,
  movies
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={'text-3xl'}>{name}</CardTitle>
        <CardDescription>
          <article className={'prose-slate prose-lg whitespace-pre-line'}>
            {description}
          </article>
        </CardDescription>
      </CardHeader>

      <Separator className={'mb-10'} />

      <CardContent>
        <MovieCardList movies={movies} />
      </CardContent>
    </Card>
  )
}
