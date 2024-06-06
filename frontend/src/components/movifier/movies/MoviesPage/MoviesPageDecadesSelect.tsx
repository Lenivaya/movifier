import { gql } from '@apollo/client'
import { MoviesSearchCriteriaInput, useDecadesQuery } from '@/lib'
import { Option } from '@mobily/ts-belt'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { isSome } from '@/lib/types'
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui'

const GetDecades = gql`
  query Decades {
    getMovieDecades {
      decades
    }
  }
`

export function MoviesPageDecadesSelect({
  criteria,
  setDecade
}: {
  criteria: MoviesSearchCriteriaInput
  setDecade: (value: Option<number>) => void
}) {
  const [keyForResetting, setKeyForResetting] = React.useState(+new Date())
  const { data, loading } = useDecadesQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only'
  })
  const [selectedDecade, setSelectedDecade] = useState(
    criteria.decade ?? undefined
  )

  return (
    <Select
      key={keyForResetting}
      defaultValue={selectedDecade?.toString()}
      value={isSome(selectedDecade) ? selectedDecade?.toString() : undefined}
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
        <SelectSeparator />

        <Button
          className='w-full px-2'
          variant='secondary'
          size='sm'
          onClick={(e) => {
            e.stopPropagation()
            setSelectedDecade(undefined)
            setDecade(null)
            setKeyForResetting(+new Date())
          }}
        >
          Clear
        </Button>
      </SelectContent>
    </Select>
  )
}
