import React, { FC, Suspense, useState } from 'react'
import {
  MoviesSearchCriteriaInput,
  useDecadesQuery,
  useGenresQuery,
  useSearchMoviesSuspenseQuery
} from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { gql } from '@apollo/client'
import { useMutative } from 'use-mutative'
import { SearchBar } from '@/components/movifier/generic/search'
import { AppLoader } from '@/components/movifier/generic'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Link } from 'next-view-transitions'

const SearchMovies = gql`
  query SearchMovies($searchCriteria: MoviesSearchCriteriaInput!) {
    searchMovies(take: 5, searchCriteria: $searchCriteria) {
      ...MovieCardItem
    }
  }
`

export function MoviesPage({
  initialSearchCriteria = {
    search: '',
    genre: null,
    decade: null
  }
}: {
  initialSearchCriteria?: MoviesSearchCriteriaInput
}) {
  const [searchCriteria, setSearchCriteria] =
    useMutative<MoviesSearchCriteriaInput>(initialSearchCriteria)

  const criteriaChanger =
    <T,>(field: keyof MoviesSearchCriteriaInput) =>
    (value: T) =>
      setSearchCriteria((prev) => ({ ...prev, [field]: value }))

  return (
    <main className='relative flex min-h-[100vh] w-full flex-col gap-5 items-center justify-between max-md:pt-5 pt-7'>
      <div className='w-5/6 ml-10 mr-10 p-3 gap-5 flex justify-center bg-slate-200/30 rounded-lg shadow-lg '>
        <MoviesPageGenreSelect
          criteria={searchCriteria}
          setGenre={criteriaChanger('genre')}
        />
        <MoviesPageDecadesSelect
          criteria={searchCriteria}
          setDecade={criteriaChanger<number>('decade')}
        />
      </div>

      <div className={'max-lg:w-full w-5/6 pl-2 pr-2'}>
        <SearchBar
          search={searchCriteria.search || ''}
          handleSearch={criteriaChanger('search')}
          placeholder='Search for a movie'
        />
      </div>

      <div className='w-full mx-auto my-auto min-h-[90vh] flex justify-center pb-5'>
        <Suspense fallback={<AppLoader />}>
          <MoviesPageCardListSuspense searchCriteria={searchCriteria} />
        </Suspense>
      </div>
    </main>
  )
}

const GetDecades = gql`
  query Decades {
    getMovieDecades {
      decades
    }
  }
`

function MoviesPageDecadesSelect({
  criteria,
  setDecade
}: {
  criteria: MoviesSearchCriteriaInput
  setDecade: (value: number) => void
}) {
  const { data, loading } = useDecadesQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only'
  })
  const [selectedDecade, setSelectedDecade] = useState(
    criteria.decade ?? undefined
  )

  return (
    <Select
      defaultValue={selectedDecade?.toString()}
      onValueChange={(newValue) => {
        setSelectedDecade(+newValue)
        setDecade(+newValue)
      }}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Decade' />
      </SelectTrigger>
      <SelectContent>
        {data?.getMovieDecades.decades.map((decade) => (
          <Link href={`/movies/decade/${decade}`} passHref>
            <div>
              <SelectItem value={decade.toString()}>{decade}</SelectItem>
            </div>
          </Link>
        ))}
      </SelectContent>
    </Select>
  )
}

const GetGenres = gql`
  query Genres {
    genres {
      name
    }
  }
`

function MoviesPageGenreSelect({
  criteria,
  setGenre
}: {
  criteria: MoviesSearchCriteriaInput
  setGenre: (value: string) => void
}) {
  const { data, loading } = useGenresQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only'
  })
  const [selectedGenre, setSelectedGenre] = useState(
    criteria.genre ?? undefined
  )

  return (
    <Select
      defaultValue={selectedGenre}
      onValueChange={(newValue) => {
        setSelectedGenre(newValue)
        setGenre(newValue)
        // TODO https://github.com/shuding/next-view-transitions/pull/18
        // router.push(`/movies/genre/${newValue}`)
      }}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Genre' />
      </SelectTrigger>
      <SelectContent>
        {data?.genres.map((genre) => (
          <Link href={`/movies/genre/${genre.name}`} passHref>
            <div>
              <SelectItem value={genre.name}>{genre.name}</SelectItem>
            </div>
          </Link>
        ))}
      </SelectContent>
    </Select>
  )
}

const MoviesPageCardListSuspense: FC<{
  searchCriteria: MoviesSearchCriteriaInput
}> = ({ searchCriteria }) => {
  const { data } = useSearchMoviesSuspenseQuery({
    variables: {
      searchCriteria
    },
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className={'flex flex-col w-full h-full justify-start max-w-5xl'}>
      <MovieCardList movies={data?.searchMovies} />
    </div>
  )
}
