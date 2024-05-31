import { gql } from '@apollo/client'
import { FC } from 'react'
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

export const MoviePageDetailsTabsFragment = gql`
  fragment MoviePageDetailsTabsItem on Movie {
    movieInfo {
      alternativeTitles
    }

    crewMembers {
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
      language
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
  return (
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
              {crewMembers
                .filter(
                  (member) => member.movieCrewMemberType?.name === 'Actor'
                )
                .map((member) => (
                  <Link
                    href={`/person/${member.crewMember.id}`}
                    key={member.crewMember.id}
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
                {studios.map((studio) => (
                  <Link
                    href={`/movies/studio/${studio.name}`}
                    key={studio.name}
                  >
                    <Badge>{studio.name}</Badge>
                  </Link>
                ))}
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Spoken languages'}>
                {spokenLanguages.map((lang) => (
                  <Link
                    href={`/movies/language/${lang.language}`}
                    key={lang.language}
                  >
                    <Badge>{lang.language}</Badge>
                  </Link>
                ))}
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Alternative titles'}>
                {movieInfo?.alternativeTitles.map((title) => (
                  <Badge key={title}>{title}</Badge>
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
                {genres.map((genre) => (
                  <Link href={`/movies/genre/${genre.name}`} key={genre.name}>
                    <Badge>{genre.name}</Badge>
                  </Link>
                ))}
              </MoviePageDetailSection>

              <MoviePageDetailSection title={'Keyword categories'}>
                {keywordCategories.map((keyword) => (
                  <Link
                    href={`/movies/keyword/${keyword.name}`}
                    key={keyword.id}
                  >
                    <Badge>{keyword.name}</Badge>
                  </Link>
                ))}
              </MoviePageDetailSection>
            </MoviePageDetailsSectionContainer>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
