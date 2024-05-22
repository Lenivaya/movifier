'use client'

import React, { FC, useCallback } from 'react'
import { useCurrentUser, useLogout } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { Button } from '@/components/ui'
import { UserAuthenticationDialog } from '@/components/movifier/layout/navbar/UserAuthenticationDialog'

export const NavbarUser: FC = () => {
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const logout = useLogout()

  const onLogoutClick = useCallback(
    async (_event: React.MouseEvent<HTMLButtonElement>) => {
      await logout()
    },
    [logout]
  )

  return (
    <div className='flex'>
      <nav className='text-sm font-semibold leading-6 text-slate-700'>
        <ul className='flex items-center space-x-8'>
          {isSignedIn ? (
            <div className={'flex gap-3 content-center'}>
              <span className={'my-auto'}>{user?.name}</span>
              <Button variant='ghost' onClick={onLogoutClick}>
                🚪
              </Button>
            </div>
          ) : (
            <UserAuthenticationDialog />
          )}
        </ul>
      </nav>
    </div>
  )
}
