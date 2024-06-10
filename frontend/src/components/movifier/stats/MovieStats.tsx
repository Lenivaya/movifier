import { arrayNotNull, truncate, useGetMoviesStatsQuery } from '@/lib'
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import * as React from 'react'
import { gql } from '@apollo/client'

const MOVIE_STATS = gql`
  query GetMoviesStats {
    topGenres(first: 10) {
      genreId
      genreName
      movieCount
    }

    topMoviesByLikes(first: 10) {
      movieId
      movieName
      totalLikes
    }

    topMoviesByAppearancesInLists(first: 5) {
      movieId
      movieName
      appearancesInLists
    }

    topMoviesByRating(first: 10) {
      movieId
      movieName
      avgRating
    }

    topMoviesByViews(first: 10) {
      movieId
      movieName
      totalViews
    }

    moviesPostedYearly(first: 30) {
      year
      totalMoviesPosted
    }
  }
`

export function MovieStats() {
  const { data } = useGetMoviesStatsQuery({
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
            data={(data?.topGenres ?? []).map((data) => ({
              ...data,
              categoryName: truncate(data?.genreName ?? '', 7)
            }))}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              label={{
                value: 'Genres',
                position: 'insideBottomRight',
                offset: -20
              }}
              dataKey='genreName'
              interval={0}
            />
            <YAxis
              label={{
                value: 'Movies count',
                angle: -90,
                position: 'insideLeft',
                offset: -20
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey={'movieCount'} fill='#93a549' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className='flex w-full max-h-[95vh] gap-2'>
        <div className='min-h-[60vh] basis-2/5 rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
          <h1 className={'h-min'}>Likes</h1>
          <ResponsiveContainer width='100%' height='100%' className={'mb-2'}>
            <PieChart width={730} height={250}>
              <h1 className={'h-min'}>Likes</h1>
              <Legend />
              <Tooltip />
              <Pie
                data={arrayNotNull(data?.topMoviesByLikes ?? [])}
                dataKey='totalLikes'
                nameKey='movieName'
                cx='50%'
                cy='50%'
                fill='#8884d8'
                label
              >
                {(data?.topMoviesByLikes ?? []).map((entry, index) => (
                  <Cell
                    className='outline-none'
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='min-h-[60vh] basis-3/5 rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
          <h1 className={'h-min mb-5'}>Appearances in movie lists</h1>
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
              data={(data?.topMoviesByAppearancesInLists ?? []).map((data) => ({
                ...data,
                movieName: truncate(data?.movieName ?? '', 7)
              }))}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                label={{
                  value: 'Movies',
                  position: 'insideBottomRight',
                  offset: -20
                }}
                dataKey='movieName'
                interval={0}
              />
              <YAxis
                label={{
                  value: 'Appearances',
                  angle: -90,
                  position: 'insideLeft',
                  offset: -20
                }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey={'appearancesInLists'} fill='#37a59c' />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='min-h-[80vh] w-full rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
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
            data={(data?.topMoviesByRating ?? []).map((data) => ({
              ...data,
              movieName: truncate(data?.movieName ?? '', 13)
            }))}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              className={'text-xs'}
              label={{
                value: 'Movies',
                position: 'insideBottomRight',
                offset: -20
              }}
              dataKey='movieName'
              interval={0}
            />
            <YAxis
              label={{
                value: 'Average rating',
                angle: -90,
                position: 'insideLeft',
                offset: -20
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey={'avgRating'} fill='#a55462' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className='min-h-[80vh] w-full rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
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
            data={(data?.topMoviesByViews ?? []).map((data) => ({
              ...data,
              movieName: truncate(data?.movieName ?? '', 13)
            }))}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              className={'text-xs'}
              label={{
                value: 'Movies',
                position: 'insideBottomRight',
                offset: -20
              }}
              dataKey='movieName'
              interval={0}
            />
            <YAxis
              label={{
                value: 'Total views',
                angle: -90,
                position: 'insideLeft',
                offset: -20
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey={'totalViews'} fill='#93a549' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className='min-h-[85vh] w-full rounded bg-neutral-200 p-5 dark:bg-neutral-800/30'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={730}
            height={250}
            // @ts-ignore
            data={data?.moviesPostedYearly ?? []}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='year' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='totalMoviesPosted'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
