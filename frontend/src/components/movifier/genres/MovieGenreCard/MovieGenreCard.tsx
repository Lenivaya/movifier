import { gql } from '@apollo/client'
import { MovieGenreCardItemFragment } from '@/lib'
import { useIsAdmin } from '@/lib/hooks/CurrentUser'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { AppTooltip } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'
import { FilePenLine } from 'lucide-react'
import * as React from 'react'
import { DeleteMovieGenreButton } from '@/components/movifier/genres/MovieGenreCard/DeleteMovieGenreButton'

const MovieGenreCardFragment = gql`
  fragment MovieGenreCardItem on Genre {
    id
    name

    _count {
      movies
    }
  }
`

export function MovieGenreCard(genre: MovieGenreCardItemFragment) {
  const isAdmin = useIsAdmin()

  return (
    <Card className={'min-w-[10em]'}>
      <CardHeader>
        <CardTitle>{genre.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{genre._count?.movies} movies</p>
      </CardContent>

      <CardFooter className={'flex flex-col justify-start items-start gap-5'}>
        {isAdmin && (
          <div className={'grid grid-cols-2 mx-auto gap-5'}>
            <AppTooltip text={'Edit movie genre'}>
              <Link
                href={`/movies/genres/${genre.id}/edit`}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <FilePenLine />
              </Link>
            </AppTooltip>

            <AppTooltip text={'Delete movie genre'}>
              <DeleteMovieGenreButton id={genre.id} />
            </AppTooltip>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
