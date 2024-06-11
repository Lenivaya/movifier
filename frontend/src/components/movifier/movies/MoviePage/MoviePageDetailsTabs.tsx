import { gql } from '@apollo/client'
import { FC, useMemo } from 'react'
import { MoviePageDetailsTabsItemFragment } from '@/lib'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { Link } from 'next-view-transitions'
import { MoviePageDetailsSectionContainer } from '@/components/movifier/movies/MoviePage/MoviePageDetailsSectionContainer'
import { MoviePageDetailSection } from '@/components/movifier/movies/MoviePage/MoviePageDetailSection'
import { Badge } from '@/components/ui/badge'
import { ShowMoreList } from '@/components/generic/ShowMoreList'
import { A, F, pipe } from '@mobily/ts-belt'

export const MoviePageDetailsTabsFragment = gql`
  fragment MoviePageDetailsTabsItem on Movie {
    movieInfo {
      alternativeTitles
    }

    crewMembers(
      orderBy: [{ crewMember: { popularity: desc } }, { order: asc }]
    ) {
      movieCrewMemberType {
        id
        name
      }
      crewMember {
        name
        id
      }
    }

    studios {
      name
    }
    genres {
      name
    }
    keywordCategories {
      id
      name
    }
    spokenLanguages {
      iso_639_1
      name
    }
  }
`
export const MoviePageDetailsTabs: FC<MoviePageDetailsTabsItemFragment> = ({
  crewMembers,
  studios,
  spokenLanguages,
  movieInfo,
  genres,
  keywordCategories
}) => {
  const renderShowMoreButtonCast = (
    showAll: boolean,
    toggleShowMore: () => void
  ) => (
    <div
      key='show-more-button'
      onClick={toggleShowMore}
      className='text-white rounded-3xl p-2 grow text-center text-xs bg-gradient-to-r from-slate-900 to-slate-700 cursor-pointer'
    >
      {showAll ? 'Show less' : 'Show more'}
    </div>
  )

  const renderShowMoreButtonBadge = (
    showAll: boolean,
    toggleShowMore: () => void
  ) => (
    <Badge onClick={toggleShowMore}>
      {showAll ? 'Show less' : 'Show more'}
    </Badge>
  )

  const [cast, crew] = pipe(
    crewMembers,
    A.partition((member) => member.movieCrewMemberType?.name === 'Actor')
  )

  const groupedCrewMembers = useMemo(() => {
    const groupMap = new Map<
      string,
      MoviePageDetailsTabsItemFragment['crewMembers']
    >()

    crew.forEach((member) => {
      const typeName = member.movieCrewMemberType?.name
      if (!typeName) return
      if (!groupMap.has(typeName)) groupMap.set(typeName, [])
      groupMap.get(typeName)!.push(member)
    })

    return groupMap
  }, [crew])

  return (
    <Tabs defaultValue='cast' className='w-[400px] mx-auto'>
      <TabsList className='grid w-full grid-cols-4'>
        <TabsTrigger value='cast'>Cast</TabsTrigger>
        <TabsTrigger value='crew'>Crew</TabsTrigger>
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
              <ShowMoreList
                items={F.toMutable(cast)}
                renderItem={(member) => (
                  <Link
                    href={`/persons/${member.crewMember.id}`}
                    key={member.crewMember.id}
                    className={
                      'text-white rounded-3xl p-2 grow text-center text-xs bg-gradient-to-r from-slate-900 to-slate-700'
                    }
                  >
                    {member.crewMember.name}
                  </Link>
                )}
                renderShowMoreButton={renderShowMoreButtonCast}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value='crew'>
        <Card>
          <CardHeader>
            <CardTitle>Crew</CardTitle>
            <CardDescription>Movie crew</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            {Array.from(groupedCrewMembers.entries()).map(
              ([typeName, members]) => (
                <MoviePageDetailsSectionContainer>
                  <MoviePageDetailSection title={typeName}>
                    <ShowMoreList
                      items={members}
                      renderShowMoreButton={renderShowMoreButtonBadge}
                      initialCount={5}
                      renderItem={(member) => (
                        <Link
                          href={`/persons/${member.crewMember.id}`}
                          key={member.crewMember.id}
                        >
                          <Badge>{member.crewMember.name}</Badge>
                        </Link>
                      )}
                    />
                  </MoviePageDetailSection>
                </MoviePageDetailsSectionContainer>
              )
            )}
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
                <ShowMoreList
                  items={studios}
                  renderItem={(studio) => (
                    <Link
                      href={`/movies/studio/${studio.name}`}
                      key={studio.name}
                    >
                      <Badge>{studio.name}</Badge>
                    </Link>
                  )}
                  renderShowMoreButton={renderShowMoreButtonBadge}
                />
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Spoken languages'}>
                <ShowMoreList
                  items={spokenLanguages}
                  renderItem={(lang) => (
                    <Link
                      href={`/movies/language/${lang.iso_639_1}`}
                      key={lang.iso_639_1}
                    >
                      <Badge>{lang.name}</Badge>
                    </Link>
                  )}
                  renderShowMoreButton={renderShowMoreButtonBadge}
                />
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Alternative titles'}>
                <ShowMoreList
                  items={movieInfo?.alternativeTitles ?? []}
                  renderItem={(title) => <Badge key={title}>{title}</Badge>}
                  renderShowMoreButton={renderShowMoreButtonBadge}
                  initialCount={5}
                />
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
                <ShowMoreList
                  items={genres}
                  renderItem={(genre) => (
                    <Link href={`/movies/genre/${genre.name}`} key={genre.name}>
                      <Badge>{genre.name}</Badge>
                    </Link>
                  )}
                  renderShowMoreButton={renderShowMoreButtonBadge}
                />
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Keyword categories'}>
                <ShowMoreList
                  items={keywordCategories}
                  renderItem={(keyword) => (
                    <Link
                      href={`/movies/keyword/${keyword.name}`}
                      key={keyword.id}
                    >
                      <Badge>{keyword.name}</Badge>
                    </Link>
                  )}
                  renderShowMoreButton={renderShowMoreButtonBadge}
                />
              </MoviePageDetailSection>
            </MoviePageDetailsSectionContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
