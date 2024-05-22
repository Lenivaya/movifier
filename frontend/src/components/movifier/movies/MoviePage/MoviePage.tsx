import { gql } from '@apollo/client'
import { Imbue } from 'next/font/google'
import { cn, MoviePageItemFragment } from '@/lib'
import { FC, ReactNode } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import { Link } from 'next-view-transitions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { DirectorNamesTitle } from '@/components/movifier/movies/MoviePage/DirectorNamesTitle'
import { MoviePagePoster } from '@/components/movifier/movies/MoviePage/MoviePagePoster'

const imbue = Imbue({ subsets: ['latin'] })

export const MoviePageFragment = gql`
  fragment MoviePageItem on Movie {
    id

    movieInfo {
      title
      description
      releaseDate
      durationInMinutes
      alternativeTitles
    }

    studios {
      name
    }

    spokenLanguages {
      language
    }

    genres {
      name
    }
    keywordCategories {
      name
    }

    ...DirectorNamesTitleItem
    ...MoviePagePosterItem
  }
`

export const MoviePage: FC<{
  movie: MoviePageItemFragment
}> = ({ movie }) => {
  const movieYear = new Date(movie.movieInfo?.releaseDate).getFullYear()

  return (
    <div className={'h-dvh w-full pt-5 pb-5'}>
      <div className={'h-full max-md:w-full max-lg:w-3/4 w-5/6 mx-auto'}>
        <div className='relative grid grid-cols-[20%_80%] mx-auto gap-4 w-auto justify-start align-top'>
          <MoviePagePoster {...movie} />

          <Card className={'h-dvh mb-5 w-auto justify-self-stretch'}>
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

            <CardContent className={'mt-5'}>
              <article className={'prose prose-lg prose-slate'}>
                <p>{movie.movieInfo?.description}</p>
              </article>

              <Separator className='mt-5 mb-5' />

              <Tabs defaultValue='cast' className='w-[400px] mx-auto'>
                <TabsList className='grid w-full grid-cols-3'>
                  <TabsTrigger value='cast'>Cast</TabsTrigger>
                  <TabsTrigger value='details'>Details</TabsTrigger>
                  <TabsTrigger value='genres'>Genres</TabsTrigger>
                </TabsList>
                <TabsContent value='cast'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Cast</CardTitle>
                      <CardDescription>Movie cast</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <div className={'flex flex-grow flex-wrap gap-3 w-full'}>
                        {movie.crewMembers
                          .filter(
                            (member) =>
                              member.movieCrewMemberType?.name === 'Actor'
                          )
                          .map((member) => (
                            <Link
                              href={`/person/${member.crewMember.id}`}
                              className={
                                'text-white rounded-3xl p-2 grow text-center text-xs bg-gradient-to-r from-slate-900 to-slate-700'
                              }
                            >
                              {member.crewMember.name}
                            </Link>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value='details'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Details</CardTitle>
                      <CardDescription>Some movie details</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <MoviePageDetailsSectionContainer>
                        <MoviePageDetailSection title={'Studios'}>
                          {movie.studios.map((studio) => (
                            <Link href={`/movies/studio/${studio.name}`}>
                              <Badge>{studio.name}</Badge>
                            </Link>
                          ))}
                        </MoviePageDetailSection>

                        <MoviePageDetailSection title={'Spoken languages'}>
                          {movie.spokenLanguages.map((lang) => (
                            <Link href={`/movies/language/${lang.language}`}>
                              <Badge>{lang.language}</Badge>
                            </Link>
                          ))}
                        </MoviePageDetailSection>

                        <MoviePageDetailSection title={'Alternative titles'}>
                          {movie.movieInfo?.alternativeTitles.map((title) => (
                            <Badge>{title}</Badge>
                          ))}
                        </MoviePageDetailSection>
                      </MoviePageDetailsSectionContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value='genres'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Genres</CardTitle>
                      <CardDescription>Movie genres</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                      <MoviePageDetailsSectionContainer>
                        <MoviePageDetailSection title={'Genres'}>
                          {movie.genres.map((genre) => (
                            <Link href={`/movies/genre/${genre.name}`}>
                              <Badge>{genre.name}</Badge>
                            </Link>
                          ))}
                        </MoviePageDetailSection>

                        <MoviePageDetailSection title={'Keyword categories'}>
                          {movie.keywordCategories.map((keyword) => (
                            <Link href={`/movies/keyword/${keyword.name}`}>
                              <Badge>{keyword.name}</Badge>
                            </Link>
                          ))}
                        </MoviePageDetailSection>
                      </MoviePageDetailsSectionContainer>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <p>{movie.movieInfo?.durationInMinutes} mins</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export const MoviePageDetailsSectionContainer: FC<
  Readonly<{
    children: ReactNode
  }>
> = ({ children }) => {
  return <div className='flex flex-col gap-6'>{children}</div>
}

export const MoviePageDetailSection: FC<{
  children: ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <div className={'flex flex-row w-full'}>
      <div className={'grid grid-cols-2 align-baseline items-end gap-4 w-full'}>
        <div className={'border-b-2 border-dotted uppercase text-sm'}>
          {title}
        </div>
        <div
          className={'flex flex-row flex-wrap flex-grow gap-2 align-baseline'}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
