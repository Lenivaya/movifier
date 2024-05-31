'use client'

import React, { FC, ReactNode, useCallback } from 'react'
import { useCurrentUser, useLogout } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { Button } from '@/components/ui'
import { UserAuthenticationDialog } from '@/components/movifier/users/UserAuthenticationDialog'
import { CircleUser, DoorClosedIcon } from 'lucide-react'
import { AppTooltip } from '@/components/movifier/generic'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Link } from 'next-view-transitions'

export const NavbarUser: FC = () => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)

  return (
    <div className='flex'>
      <nav className='text-sm font-semibold leading-6 text-slate-700'>
        <ul className='flex items-baseline space-x-8'>
          {isSignedIn ? (
            <UserProfileDropDownMenu>
              <Button
                variant={'secondary'}
                className={'flex gap-2 content-center'}
              >
                <CircleUser />
                <span className={'my-auto'}>{user?.name}</span>
              </Button>
            </UserProfileDropDownMenu>
          ) : (
            <UserAuthenticationDialog>
              <Button variant='outline'>Login | Register</Button>
            </UserAuthenticationDialog>
          )}
        </ul>
      </nav>
    </div>
  )
}

export const UserProfileDropDownMenu: FC<{ children: ReactNode }> = ({
  children
}) => {
  const logout = useLogout()
  const onLogoutClick = useCallback(
    async (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      event.stopPropagation()
      await logout()
    },
    [logout]
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={'/user/dashboard'} passHref>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>User profile</DropdownMenuItem>
        <Link href={'/user/dashboard/liked'} passHref>
          <DropdownMenuItem>Liked movies</DropdownMenuItem>
        </Link>
        <Link href={'/user/dashboard/watchlist'} passHref>
          <DropdownMenuItem>Watchlist</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Reviews</DropdownMenuItem>
        <DropdownMenuItem>Movie lists</DropdownMenuItem>
        <DropdownMenuSeparator />
        <AppTooltip text={'Logout from account'}>
          <DropdownMenuItem onClick={onLogoutClick}>
            <span>Logout</span>
            <Button variant='ghost'>
              <DoorClosedIcon className='w-5 h-5' />
            </Button>
          </DropdownMenuItem>
        </AppTooltip>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
