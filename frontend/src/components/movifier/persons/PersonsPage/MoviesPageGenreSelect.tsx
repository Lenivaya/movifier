import { gql } from '@apollo/client'
import { MoviesSearchCriteriaInput, useGenresQuery } from '@/lib'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui'
import { Option } from '@mobily/ts-belt'

const GetGenres = gql`
  query Genres {
    genres {
      name
    }
  }
`

export function MoviesPageGenreSelect({
  criteria,
  setGenre
}: {
  criteria: MoviesSearchCriteriaInput
  setGenre: (value: Option<string>) => void
}) {
  const [keyForResetting, setKeyForResetting] = React.useState(+new Date())
  const { data, loading } = useGenresQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only'
  })
  const [selectedGenre, setSelectedGenre] = useState(
    criteria.genre ?? undefined
  )

  return (
    <Select
      key={keyForResetting}
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

        <SelectSeparator />

        <Button
          className='w-full px-2'
          variant='secondary'
          size='sm'
          onClick={(e) => {
            e.stopPropagation()
            setSelectedGenre(undefined)
            setGenre(null)
            setKeyForResetting(+new Date())
          }}
        >
          Clear
        </Button>
      </SelectContent>
    </Select>
  )
}
