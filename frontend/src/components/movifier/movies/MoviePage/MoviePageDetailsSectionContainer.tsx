import { FC, ReactNode } from 'react'

export const MoviePageDetailsSectionContainer: FC<
  Readonly<{
    children: ReactNode
  }>
> = ({ children }) => {
  return <div className='flex flex-col gap-6'>{children}</div>
}
