import { useGetAppStatsQuery } from '@/lib'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui'
import { ClockIcon, HeartIcon, Scroll, UserRoundCheck } from 'lucide-react'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { gql } from '@apollo/client'

const APP_STATS = gql`
  query GetAppStats {
    appStats {
      totalAppUsers
      totalLikes
      totalMovieWatches
      totalMovieLists
      totalMoviesInWatchlists
      usersWithMovieLists
    }
  }
`

export function AppStats() {
  const { data } = useGetAppStatsQuery({
    fetchPolicy: 'cache-and-network'
  })

  const COLORS = [
    '#8884d8',
    '#FA8072',
    '#AF69EE',
    '#3DED97',
    '#3AC7EB',
    '#F9A603',
    '#93a549',
    '#4977a5'
  ]

  return (
    <div className='grid grid-cols-3 gap-5 w-auto mx-auto my-auto justify-center items-center content-center align-middle'>
      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>App users</CardTitle>
          <CardDescription>Total app users</CardDescription>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>{data?.appStats.totalAppUsers}</p>
          <UserRoundCheck
            color={'#b6aaaa'}
            className={'my-auto h-auto w-[2em]'}
          />
        </CardContent>
      </Card>

      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>Movies watched</CardTitle>
          <CardDescription>Total movie watched</CardDescription>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>
            {data?.appStats.totalMovieWatches}
          </p>
          <EyeOpenIcon color={'#b6aaaa'} className={'my-auto h-auto w-[2em]'} />
        </CardContent>
      </Card>

      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>Movies liked</CardTitle>
          <CardDescription>Total movie likes</CardDescription>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>{data?.appStats.totalLikes}</p>
          <HeartIcon color={'#b6aaaa'} className={'my-auto h-auto w-[2em]'} />
        </CardContent>
      </Card>

      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>Movies lists created</CardTitle>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>{data?.appStats.totalMovieLists}</p>
          <Scroll color={'#b6aaaa'} className={'my-auto h-auto w-[2em]'} />
        </CardContent>
      </Card>

      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>Users with movie lists</CardTitle>
          <CardDescription>
            Users who spent their time creating movie lists
          </CardDescription>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>
            {data?.appStats.usersWithMovieLists}
          </p>
          <Scroll color={'#b6aaaa'} className={'my-auto h-auto w-[2em]'} />
          <UserRoundCheck
            color={'#b6aaaa'}
            className={'my-auto h-auto w-[2em]'}
          />
        </CardContent>
      </Card>

      <Card
        className={
          'h-[14em] w-[12em] flex flex-col !justify-between justify-self-center'
        }
      >
        <CardHeader>
          <CardTitle>Total movies in watchlists</CardTitle>
          <CardDescription>Movies left to watch...</CardDescription>
        </CardHeader>

        <CardContent className={'flex gap-5'}>
          <p className='text-4xl font-bold'>
            {data?.appStats.totalMoviesInWatchlists}
          </p>
          <ClockIcon color={'#b6aaaa'} className={'my-auto h-auto w-[2em]'} />
        </CardContent>
      </Card>
    </div>
  )
}
