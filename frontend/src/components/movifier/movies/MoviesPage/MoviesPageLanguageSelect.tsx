import { MoviesSearchCriteriaInput, useGetSpokenLanguagesQuery } from '@/lib'
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
import { Link } from 'next-view-transitions'
import { Button } from '@/components/ui'

export function MoviesPageLanguageSelect({
  criteria,
  setLanguage
}: {
  criteria: MoviesSearchCriteriaInput
  setLanguage: (value: Option<string>) => void
}) {
  const [keyForResetting, setKeyForResetting] = React.useState(+new Date())
  const { data, loading } = useGetSpokenLanguagesQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only'
  })
  const [selectedLanguage, setSelectedLanguage] = useState(
    criteria.language ?? undefined
  )

  return (
    <Select
      key={keyForResetting}
      defaultValue={selectedLanguage}
      onValueChange={(newValue) => {
        setSelectedLanguage(newValue)
        setLanguage(newValue)
      }}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Language' />
      </SelectTrigger>
      <SelectContent>
        {data?.movieSpokenLanguages.map((spokenLanguage) => (
          <Link href={`/movies/language/${spokenLanguage.language}`} passHref>
            <div>
              <SelectItem value={spokenLanguage.language}>
                {spokenLanguage.language}
              </SelectItem>
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
            setSelectedLanguage(undefined)
            setLanguage(null)
            setKeyForResetting(+new Date())
          }}
        >
          Clear
        </Button>
      </SelectContent>
    </Select>
  )
}
