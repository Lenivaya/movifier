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
import { FilePenLine, Film } from 'lucide-react'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { Link } from 'next-view-transitions'
import { Badge } from '@/components/ui/badge'
import { AppTooltip } from '@/components/movifier/generic'
import { DeleteMovieListButton } from '@/components/movifier/movie-lists/DeleteMovieListButton'

export const MovieListCardFragment = gql`
  fragment MovieListCardItem on MovieList {
    id
    name
    tags

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
  tags,
  movies,
  movieListAuthor
}) => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const isAuthor = isSignedIn && user?.id === movieListAuthor.id

  return (
    <Card className={'w-[30em] min-h-full flex-1'}>
      <CardHeader>
        <Link href={`/movie-lists/${id}`} className={'h-full grow'}>
          <CardTitle>{name}</CardTitle>
        </Link>
        <CardDescription>
          <div className='flex-col flex gap-5'>
            <div className={'flex align-baseline items-center gap-1'}>
              <span>{movies.length}</span>
              <Film />
            </div>

            <div className='flex flex-wrap items-center flex-grow gap-1.5'>
              {tags.map((tag) => (
                <Badge key={tag} className={'mr-2 flex-grow'}>
                  <p className={'text-center mx-auto'}>{tag}</p>
                </Badge>
              ))}
            </div>
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
          <div className={'grid grid-cols-2 mx-auto gap-5'}>
            <AppTooltip text={'Edit movie list'}>
              <Link
                href={`/movie-lists/${id}/edit`}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <FilePenLine />
              </Link>
            </AppTooltip>

            <AppTooltip text={'Delete movie list'}>
              <DeleteMovieListButton id={id} />
            </AppTooltip>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
