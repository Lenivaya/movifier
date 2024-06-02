import { FC } from 'react'
import { gql } from '@apollo/client'
import { MovieListCardItemFragment } from '@/lib'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { Film } from 'lucide-react'

export const MovieListCardFragment = gql`
  fragment MovieListCardItem on MovieList {
    id
    name
    description

    movies(take: 5) {
      id
      movieInfo {
        id
        title
        posterUrl
      }
    }

    movieListAuthor {
      id
      username
    }
  }
`

export const MovieListCard: FC<MovieListCardItemFragment> = ({
  id,
  name,
  description,
  movies,
  movieListAuthor
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          <div className={'flex align-baseline items-center gap-1'}>
            <span>{movies.length}</span>
            <Film />
          </div>
        </CardDescription>
      </CardHeader>

      <Separator className={'mb-5'} />

      <CardContent>
        <div className='flex items-center space-x-4 overflow-hidden rounded-lg'>
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className='relative bg-transparent rounded-lg shadow-2xl drop-shadow-2xl'
              style={{
                marginLeft: index === 0 ? '0' : '-2rem',
                zIndex: movies.length - index
              }}
            >
              <img
                className='w-auto h-48 object-cover rounded-lg shadow-2xl drop-shadow-2xl'
                src={movie.movieInfo?.posterUrl}
                alt={movie.movieInfo?.title}
              />
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <p className='text-sm text-gray-500'>
          By{' '}
          <span className={'underline hover:text-black'}>
            {movieListAuthor.username}
          </span>{' '}
        </p>
      </CardFooter>
    </Card>
  )
}
