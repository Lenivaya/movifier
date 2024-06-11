import { Option } from '@mobily/ts-belt'
import { MovieOrderByWithRelationAndSearchRelevanceInput } from '@/lib'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { match } from 'ts-pattern'
import { Button } from '@/components/ui'

export function MoviesPageOrderBySelect({
  orderBy,
  setOrderBy
}: {
  orderBy: Option<MovieOrderByWithRelationAndSearchRelevanceInput>
  setOrderBy: (
    value: Option<MovieOrderByWithRelationAndSearchRelevanceInput>
  ) => void
}) {
  const [keyForResetting, setKeyForResetting] = React.useState(+new Date())

  return (
    <Select
      key={keyForResetting}
      onValueChange={(newValue) => {
        setOrderBy(
          match<
            string,
            Option<MovieOrderByWithRelationAndSearchRelevanceInput>
          >(newValue)
            .with('length_shortest', (_) => ({
              movieInfo: {
                durationInMinutes: 'asc'
              }
            }))
            .with('length_longest', (_) => ({
              movieInfo: {
                durationInMinutes: 'desc'
              }
            }))
            .with('release_newest', (_) => ({
              movieInfo: {
                releaseDate: 'desc'
              }
            }))
            .with('release_oldest', (_) => ({
              movieInfo: {
                releaseDate: 'asc'
              }
            }))
            .otherwise((_) => null)
        )
      }}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Order by' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Film length</SelectLabel>
          <SelectItem value='length_shortest'>Shortest first</SelectItem>
          <SelectItem value='length_longest'>Longest first</SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>Release date</SelectLabel>
          <SelectItem value='release_newest'>Newest first</SelectItem>
          <SelectItem value='release_oldest'>Oldest first</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <Button
          className='w-full px-2'
          variant='secondary'
          size='sm'
          onClick={(e) => {
            e.stopPropagation()
            setOrderBy(null)
            setKeyForResetting(+new Date())
          }}
        >
          Clear
        </Button>
      </SelectContent>
    </Select>
  )
}
