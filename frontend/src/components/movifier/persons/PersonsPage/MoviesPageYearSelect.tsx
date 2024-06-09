import { Option } from '@mobily/ts-belt'
import { isNone } from '@/lib/types'
import React, { useCallback } from 'react'
import { Badge } from '@/components/ui/badge'

export function MoviesPageYearSelect({
  decade,
  year,
  setYear
}: {
  decade?: Option<number>
  year?: Option<number>
  setYear: (value: Option<number>) => void
}) {
  if (isNone(decade)) return null

  const years = Array.from({ length: 10 }, (_, i) => decade + i)

  const onYearClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const selectedYear = parseInt(event.currentTarget.innerText)

      if (selectedYear === year) {
        setYear(null)
        return
      }

      setYear(selectedYear)
    },
    [setYear, year]
  )

  return (
    <div className='w-5/6 ml-10 mr-10 p-3 gap-5 flex justify-center bg-slate-200/30 rounded-lg shadow-lg flex-wrap'>
      {years.map((givenYear) => {
        const isSelected = givenYear === year

        return (
          <Badge
            className={'cursor-pointer'}
            variant={isSelected ? 'default' : 'outline'}
            onClick={onYearClick}
          >
            {givenYear}
          </Badge>
        )
      })}
    </div>
  )
}
