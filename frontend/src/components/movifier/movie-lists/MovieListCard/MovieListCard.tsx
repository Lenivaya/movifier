import { FC } from 'react'
import { gql } from '@apollo/client'
import { MovieListCardItemFragment } from '@/lib'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { Film } from 'lucide-react'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { Link } from 'next-view-transitions'

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
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const isAuthor = isSignedIn && user?.id === movieListAuthor.id

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

      <CardFooter className={'flex flex-col justify-start items-start gap-5'}>
        <p className='text-sm text-gray-500'>
          By{' '}
          <span className={'underline hover:text-black'}>
            {movieListAuthor.username}
          </span>{' '}
        </p>

        {isAuthor && (
          <div className={'grid grid-cols-2 mx-auto'}>
            <Link href={`/movie-lists/${id}/edit`}>
              <Button>Edit</Button>
            </Link>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
