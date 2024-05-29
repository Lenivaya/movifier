import { FC, ReactNode } from 'react'

export const PaginationNavButton: FC<{
  onClick: () => void
  icon: ReactNode
  isActive: boolean
}> = ({ onClick, icon, isActive }) => (
  <button
    className={'text-black dark:text-white/40 dark:hover:text-white/90'}
    hidden={!isActive}
    disabled={!isActive}
    onClick={onClick}
  >
    {icon}
  </button>
)
