import { format as formatDate } from 'date-fns/fp'
import { match, P } from 'ts-pattern'

export const dateFormatter = formatDate('MM/dd/yyyy')
export const dateFormatterWithHours = formatDate('MM/dd/yyyy HH:MM')

export const nullableDateComponent = (date: string) =>
  match(date)
    .with(P.nullish, () => (
      <p className='rounded bg-fuchsia-800/30 p-3 text-center text-xs'>Now</p>
    ))
    .otherwise((date) => (
      <p className='rounded bg-fuchsia-800/30 p-3 text-center text-xs'>
        {formatDate('MM/dd/yyyy')(new Date(date))}
      </p>
    ))
