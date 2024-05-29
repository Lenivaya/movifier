import { DirectorNamesTitle } from '@/components/movifier/movies/MoviePage/DirectorNamesTitle'
import { MovieLikedButton } from '@/components/movifier/movies/MoviePage/MovieLikedButton'
import { MoviePageDetailsTabs } from '@/components/movifier/movies/MoviePage/MoviePageDetailsTabs'
import { MoviePagePoster } from '@/components/movifier/movies/MoviePage/MoviePagePoster'
import { MovieRatingInput } from '@/components/movifier/movies/MoviePage/MovieRatingInput'
import { MovieWatchedButton } from '@/components/movifier/movies/MoviePage/MovieWatchedButton'
import { ComposeKeyMovieUser } from '@/components/movifier/movies/MoviePage/types'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Separator
} from '@/components/ui'
import { cn, MoviePageItemFragment } from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { gql } from '@apollo/client'
import '@smastrom/react-rating/style.css'
import { Link } from 'next-view-transitions'
import { Imbue } from 'next/font/google'
import { FC, Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { MoviePageTopPopularReviewsList } from '@/components/movifier/movies/MoviePage/MoviePageTopPopularReviewsList'
import { MoviePageTopRecentReviewsList } from '@/components/movifier/movies/MoviePage/MoviePageTopRecentReviewsList'

const imbue = Imbue({ subsets: ['latin'] })

export const MoviePageFragment = gql`
  fragment MoviePageItem on Movie {
    id

    movieInfo {
      id
      title
      description
      releaseDate
      durationInMinutes
    }

    ...DirectorNamesTitleItem
    ...MoviePagePosterItem
    ...MoviePageDetailsTabsItem
  }
`

export const MoviePage: FC<{
  movie: MoviePageItemFragment
}> = ({ movie }) => {
  const movieYear = new Date(movie.movieInfo?.releaseDate).getFullYear()
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  const composeKeyWithUser: ComposeKeyMovieUser = {
    movieId: movie.id,
    userId: user?.id ?? ''
  }

  return (
    <div className={'h-lvh w-full pt-5 pb-5'}>
      <div className={'max-md:w-full max-lg:w-3/4 w-5/6 mx-auto'}>
        <div className='relative  grid grid-cols-[20%_80%] mx-auto gap-4 w-auto justify-start align-top'>
          <MoviePagePoster {...movie} />

          <Card className={'mb-5 w-auto justify-self-stretch'}>
            <CardHeader className='flex flex-row gap-4 items-baseline'>
              <h1
                className={cn(
                  'text-4xl font-black font-serif ',
                  imbue.className
                )}
              >
                {movie.movieInfo?.title}
              </h1>
              <Link href={`/movies/years/${movieYear}`}>
                <h2 className={'font-semibold underline underline-offset-2'}>
                  {movieYear}
                </h2>
              </Link>
              <DirectorNamesTitle {...movie} />
            </CardHeader>

            <Separator />

            <CardContent className={'mt-5'}>
              <div className='grid grid-cols-[60%_40%] gap-5 h-full'>
                <section>
                  <article className={'prose prose-lg prose-slate'}>
                    <p>{movie.movieInfo?.description}</p>
                  </article>

                  <Separator className='mt-5 mb-5' />

                  <MoviePageDetailsTabs {...movie} />

                  <p className={'font-semibold text-xs mt-7'}>
                    {movie.movieInfo?.durationInMinutes} mins
                  </p>

                  <Separator className='mt-5 mb-5' />

                  <Suspense fallback={<AppLoader />}>
                    <MoviePageTopPopularReviewsList movieId={movie.id} />
                  </Suspense>
                  <Suspense fallback={<AppLoader />}>
                    <MoviePageTopRecentReviewsList movieId={movie.id} />
                  </Suspense>
                </section>

                <aside
                  className={'w-full relative flex flex-col content-center'}
                >
                  <Separator orientation={'vertical'} className={'absolute'} />

                  {!isSignedIn && (
                    <Button variant={'outline'} className='!mx-auto'>
                      Sign in to log, rate and review
                    </Button>
                  )}

                  {isSignedIn && (
                    <div className='flex flex-col items-center gap-5'>
                      <div className='flex flex-row gap-5'>
                        <MovieWatchedButton
                          composeKey={composeKeyWithUser}
                          isSignedIn={isSignedIn}
                        />

                        <MovieLikedButton
                          composeKey={composeKeyWithUser}
                          isSignedIn={isSignedIn}
                        />
                      </div>

                      <MovieRatingInput composeKey={composeKeyWithUser} />
                    </div>
                  )}
                </aside>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
