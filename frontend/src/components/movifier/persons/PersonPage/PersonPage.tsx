import {
  NaNtoZero,
  PersonPageItemFragment,
  useGetPersonMovieCountSuspenseQuery,
  useGetUserLikedPersonMovieIdsSuspenseQuery,
  useGetUserWatchedPersonMovieIdsSuspenseQuery
} from '@/lib'
import { gql } from '@apollo/client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from '@/components/ui'
import React from 'react'
import { PersonPagePoster } from '@/components/movifier/persons/PersonPage/PersonPagePoster'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import { Progress } from '@/components/ui/progress'
import { HeartIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PersonPageMovies } from '@/components/movifier/persons/PersonPage/PersonPageMovies'

export const PersonPageFragment = gql`
  fragment PersonPageItem on MovieCrewMember {
    id
    name
    imdbId
    description
    popularity
    ...PersonPagePosterItem
  }
`

export const GetUserWatchedPersonMovieIds = gql`
  query GetUserWatchedPersonMovieIds($userId: String!, $personId: String!) {
    movies(
      where: {
        watchedBy: { some: { userId: { equals: $userId } } }
        crewMembers: {
          some: { crewMember: { is: { id: { equals: $personId } } } }
        }
      }
      distinct: [id]
    ) {
      id
    }
  }
`

export const GetUserLikedPersonMovieIds = gql`
  query GetUserLikedPersonMovieIds($userId: String!, $personId: String!) {
    movies(
      where: {
        likedBy: { some: { userId: { equals: $userId } } }
        crewMembers: {
          some: { crewMember: { is: { id: { equals: $personId } } } }
        }
      }
      distinct: [id]
    ) {
      id
    }
  }
`

export const GetPersonMovieCount = gql`
  query GetPersonMovieCount($personId: String!) {
    movies(
      where: {
        crewMembers: {
          some: { crewMember: { is: { id: { equals: $personId } } } }
        }
      }
      distinct: [id]
    ) {
      id
    }
  }
`

export function PersonPage(person: PersonPageItemFragment) {
  const user = useCurrentUser()

  const { data: moviesCountData } = useGetPersonMovieCountSuspenseQuery({
    variables: {
      personId: person.id
    },
    fetchPolicy: 'cache-and-network'
  })
  const { data: userWatchedMovieIdsData } =
    useGetUserWatchedPersonMovieIdsSuspenseQuery({
      refetchWritePolicy: 'overwrite',
      variables: {
        userId: user?.id ?? '',
        personId: person.id
      },
      fetchPolicy: 'cache-and-network'
    })
  const { data: userLikedMovieIdsData } =
    useGetUserLikedPersonMovieIdsSuspenseQuery({
      variables: {
        userId: user?.id ?? '',
        personId: person.id
      },
      fetchPolicy: 'cache-and-network'
    })

  const moviesCount = moviesCountData?.movies.length

  const watchedPercent = NaNtoZero(
    Math.round((userWatchedMovieIdsData?.movies.length / moviesCount) * 100)
  )
  const likedPercent = NaNtoZero(
    Math.round((userLikedMovieIdsData?.movies.length / moviesCount) * 100)
  )

  return (
    <div className={'grid grid-cols-[30%_70%] gap-5 align-top relative'}>
      <div className='flex-col flex justify-stretch gap-5 sticky top-5 h-auto'>
        <PersonPagePoster {...person} />

        <Card className={'h-auto w-full'}>
          <CardHeader>
            <CardTitle>Watched Movies</CardTitle>
            <CardDescription>
              <EyeOpenIcon className={'h-[2.5em] w-auto'} />
            </CardDescription>
          </CardHeader>
          <CardContent className={'flex align-baseline gap-5 items-baseline'}>
            <Progress value={watchedPercent} />
            <h1 className={'text-3xl font-bold'}>{watchedPercent}%</h1>
          </CardContent>
          <CardFooter>
            <p className={'text-xs italic'}>
              You've watched {userWatchedMovieIdsData.movies.length ?? 0} of{' '}
              {moviesCount} this person movies
            </p>
          </CardFooter>
        </Card>

        <Card className={'h-min w-full'}>
          <CardHeader>
            <CardTitle>Liked Movies</CardTitle>
            <CardDescription>
              <HeartIcon className={'h-[2.5em] w-auto'} />
            </CardDescription>
          </CardHeader>
          <CardContent className={'flex align-baseline gap-5 items-baseline'}>
            <Progress value={likedPercent} />
            <h1 className={'text-3xl font-bold'}>{likedPercent}%</h1>
          </CardContent>
          <CardFooter>
            <p className={'text-xs italic'}>
              You've liked {userLikedMovieIdsData.movies.length ?? 0} of{' '}
              {moviesCount} this person movies
            </p>
          </CardFooter>
        </Card>
      </div>

      <Card className={'w-full'}>
        <CardHeader>
          <CardTitle>{person.name}</CardTitle>
        </CardHeader>

        <Separator className={'mb-5'} />

        <CardContent>
          <Tabs defaultValue='details' className={'h-full'}>
            <TabsList className='grid w-full grid-cols-2 mb-5'>
              <TabsTrigger value='details'>Details</TabsTrigger>
              <TabsTrigger value='movies'>Movies</TabsTrigger>
            </TabsList>

            <TabsContent value='details'>
              <article className={'prose-sm prose-slate whitespace-pre-line'}>
                {person.description}
              </article>
            </TabsContent>

            <TabsContent
              value='movies'
              className={'overflow-y-scroll p-5 h-max'}
            >
              <PersonPageMovies personId={person.id} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
