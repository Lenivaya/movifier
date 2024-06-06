'use client'

import { MoviesSearchCriteriaInput } from '@/lib'
import { MoviesPage } from '@/components/movifier/movies/MoviesPage/MoviesPage'
import { D } from '@mobily/ts-belt'

type MovieFilters = Omit<MoviesSearchCriteriaInput, 'search'>
const expectedFilters = ['genre', 'search']

export default function Page({ params }: { params: { filters: string[] } }) {
  const parsedFilters = parseFilters(params.filters)

  return <MoviesPage initialSearchCriteria={parsedFilters} />
}

function parseFilters(filters: string[]): MovieFilters {
  const result = filters.reduce((acc, curr, index, array) => {
    if (index % 2 === 0 && array[index + 1]) {
      // @ts-ignore
      acc[curr] = array[index + 1]
    }
    return acc
  }, {} as MovieFilters)

  return D.filterWithKey(result, (key, _value) =>
    expectedFilters.includes(key)
  ) as MovieFilters
}
