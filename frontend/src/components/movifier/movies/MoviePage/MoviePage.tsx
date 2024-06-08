import { DirectorNamesTitle } from '@/components/movifier/movies/MoviePage/DirectorNamesTitle'
import { MovieLikedButton } from '@/components/movifier/movies/MovieLikedButton'
import { MoviePageDetailsTabs } from '@/components/movifier/movies/MoviePage/MoviePageDetailsTabs'
import { MoviePagePoster } from '@/components/movifier/movies/MoviePage/MoviePagePoster'
import { MovieRatingInput } from '@/components/movifier/movies/MoviePage/MovieRatingInput'
import { MovieWatchedButton } from '@/components/movifier/movies/MovieWatchedButton'
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
import { UserAuthenticationDialog } from '@/components/movifier/users/UserAuthenticationDialog'
import { MovieWatchListButton } from '@/components/movifier/movies/MovieWatchListButton'

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
      <div className={'max-md:w-full max-lg:w-5/6 max-xl:w-3/4 w-7/12 mx-auto'}>
        <div className='relative grid grid-cols-[25%_75%] mx-auto gap-4 w-auto justify-start align-top'>
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
              <Link href={`/movies/year/${movieYear}`}>
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
                    <UserAuthenticationDialog>
                      <Button variant={'outline'} className='!mx-auto'>
                        Sign in to log, rate and review
                      </Button>
                    </UserAuthenticationDialog>
                  )}

                  {isSignedIn && (
                    <div className='flex flex-col items-center gap-5'>
                      <div className='flex flex-row gap-5'>
                        <MovieWatchedButton
                          className={'!w-9 !h-9'}
                          composeKey={composeKeyWithUser}
                          isSignedIn={isSignedIn}
                        />

                        <MovieLikedButton
                          className={'!w-9 !h-9'}
                          composeKey={composeKeyWithUser}
                          isSignedIn={isSignedIn}
                        />

                        <MovieWatchListButton
                          className={'!w-9 !h-9'}
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
