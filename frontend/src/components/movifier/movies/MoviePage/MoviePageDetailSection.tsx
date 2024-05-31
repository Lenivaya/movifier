import { FC, ReactNode } from 'react'

export const MoviePageDetailSection: FC<{
  children: ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <div className={'flex flex-row w-full'}>
      <div className={'grid grid-cols-2 align-baseline items-end gap-4 w-full'}>
        <div className={'border-b-2 border-dotted uppercase text-sm'}>
          {title}
        </div>
        <div
          className={'flex flex-row flex-wrap flex-grow gap-2 align-baseline'}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
