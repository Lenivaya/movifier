'use client'

import { MoviesSearchCriteriaInput, isString } from '@/lib'
import { MoviesPage } from '@/components/movifier/movies/MoviesPage/MoviesPage'
import { D } from '@mobily/ts-belt'
import { match } from 'ts-pattern'

type MovieFilters = Omit<MoviesSearchCriteriaInput, 'search'>
const expectedFilters = [
  'genre',
  'decade',
  'year',
  'keyword',
  'language',
  'studio'
]

export default function Page({ params }: { params: { filters: string[] } }) {
  const parsedFilters = parseFilters(params.filters)

  return <MoviesPage initialSearchCriteria={parsedFilters} />
}

function parseFilters(filters: string[]): MovieFilters {
  const result = filters.reduce((acc, curr, index, array) => {
    if (index % 2 === 0 && array[index + 1]) {
      const value = array[index + 1]

      // @ts-ignore
      acc[curr] = match(curr)
        .with('decade', () => parseInt(value))
        .with('year', () => parseInt(value))
        .otherwise(() => value.replace(/%20/g, ' '))
    }
    return acc
  }, {} as MovieFilters)

  return D.filterWithKey(result, (key, _value) =>
    expectedFilters.includes(key)
  ) as MovieFilters
}
