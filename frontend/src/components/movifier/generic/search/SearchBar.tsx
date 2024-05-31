import { FC, useCallback, useEffect, useState } from 'react'
import { F } from '@mobily/ts-belt'
import { Input } from '@/components/ui/input'

export const SearchBar: FC<{
  search: string
  handleSearch: (search: string) => void
  placeholder?: string
  debounceDelay?: number
}> = ({ search, handleSearch, placeholder, debounceDelay = 300 }) => {
  const [input, setInput] = useState(search)

  const changeHandlerDebounced = useCallback(
    F.debounce(handleSearch, debounceDelay),
    [handleSearch, debounceDelay]
  )

  useEffect(() => {
    changeHandlerDebounced(input)
  }, [input])

  return (
    <Input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
      className={'text-center text-lg h-[3em]'}
    />
  )
}
