'use client'

import React, { FC, useCallback } from 'react'
import { useCurrentUser, useLogout } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'
import { Button } from '@/components/ui'
import { UserAuthenticationDialog } from '@/components/movifier/users/UserAuthenticationDialog'
import { DoorClosedIcon } from 'lucide-react'
import { AppTooltip } from '@/components/movifier/generic'

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
        <ul className='flex items-baseline space-x-8'>
          {isSignedIn ? (
            <div className={'flex gap-1.5 content-center'}>
              <span className={'my-auto'}>{user?.name}</span>
              <AppTooltip text={'Logout from account'}>
                <Button variant='ghost' onClick={onLogoutClick}>
                  <DoorClosedIcon className='w-5 h-5' />
                </Button>
              </AppTooltip>
            </div>
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
