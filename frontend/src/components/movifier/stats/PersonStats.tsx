import { truncate, useGetPersonStatsQuery } from '@/lib'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import * as React from 'react'
import { gql } from '@apollo/client'

const PERSON_STATS = gql`
  query GetPersonStats {
    topCrewMemberTypes(first: 10) {
      movieCrewMemberTypeId
      movieCrewMemberTypeName
      movieCount
    }

    topPersons(first: 5) {
      personId
      personName
      appearancesInMovies
      popularity
    }
  }
`

export function PersonStats() {
  const { data } = useGetPersonStatsQuery({
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
    <div className='text-dark flex h-full max-h-max flex-grow flex-row flex-wrap gap-2 overflow-y-scroll dark:text-white'>
      <div className='min-h-[70vh] w-full rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart
            width={1000}
            height={400}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 40
            }}
            data={(data?.topCrewMemberTypes ?? []).map((data) => ({
              ...data,
              movieCrewMemberTypeName: truncate(
                data?.movieCrewMemberTypeName ?? '',
                15
              )
            }))}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              className={'text-sm'}
              label={{
                value: 'Member crew types',
                position: 'insideBottomRight',
                offset: -20
              }}
              dataKey='movieCrewMemberTypeName'
              interval={0}
            />
            <YAxis
              label={{
                value: 'Movie count',
                angle: -90,
                position: 'insideLeft',
                offset: -20
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey={'movieCount'} fill='#6b8ba5' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className='min-h-[70vh] w-full rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
        <ResponsiveContainer width='100%' height='100%'>
          <ComposedChart
            width={1000}
            height={400}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 40
            }}
            data={(data?.topPersons ?? [])
              .map((data) => ({
                ...data,
                personName: truncate(data?.personName ?? '', 17)
              }))
              .sort((a, b) => b.popularity - a.popularity)}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              className={'text-sm'}
              label={{
                value: 'Persons',
                position: 'insideBottomRight',
                offset: -20
              }}
              dataKey='personName'
              interval={0}
            />
            <YAxis
              label={{
                value: 'Movie count',
                angle: -90,
                position: 'insideLeft',
                offset: -20
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey={'popularity'} fill='#6676a5' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
