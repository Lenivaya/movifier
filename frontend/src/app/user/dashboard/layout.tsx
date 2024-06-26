'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { DashboardPageProviders } from '@/app/user/dashboard/dashboardPageProviders'
import {
  Clock,
  EyeIcon,
  Film,
  GalleryVerticalEnd,
  HeartIcon,
  Home,
  LineChart,
  MessageSquare,
  Settings,
  UserRoundCog
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui'
import { Link } from 'next-view-transitions'
import { cn } from '@/lib'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { isSome } from '@/lib/types'

export default function SettingsPageLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <DashboardPageProviders>
      <div className='flex relative h-lvh w-full flex-col bg-muted/40'>
        <SettingsPageNavbar />
        {children}
      </div>
    </DashboardPageProviders>
  )
}

export function SettingsPageNavbar() {
  const { dashboardPageContext } = useDashboardPage()
  const user = useCurrentUser()
  const isSignedIn = isSome(user)
  const isAdmin = user?.role === 'ADMIN'

  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-4 mt-20'>
        <Link
          href='#'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <Film className='h-4 w-4 transition-all group-hover:scale-110' />
          <span className='sr-only'>Movifier</span>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'Home'}
              >
                <Link href='/user/dashboard'>
                  <Home className='h-5 w-5' />
                  <span className='sr-only'>Dashboard</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'Watchlist'}
              >
                <Link href='/user/dashboard/watchlist'>
                  <Clock className='h-5 w-5' />
                  <span className='sr-only'>Watchlist</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Watchlist</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'Liked'}
              >
                <Link href='/user/dashboard/liked'>
                  <HeartIcon className='h-5 w-5' />
                  <span className='sr-only'>Liked movies</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Liked movies</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'WatchedMovies'}
              >
                <Link href='/user/dashboard/watched-movies'>
                  <EyeIcon className='h-5 w-5' />
                  <span className='sr-only'>Watched movies</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Watched movies</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'MovieLists'}
              >
                <Link href='/user/dashboard/movie-lists'>
                  <GalleryVerticalEnd className='h-5 w-5' />
                  <span className='sr-only'>Movie lists</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Movie lists</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DashboardNavigationButton
                isActive={dashboardPageContext.currentPage === 'Reviews'}
              >
                <Link href='/user/dashboard/reviews'>
                  <MessageSquare className='h-5 w-5' />
                  <span className='sr-only'>Movie reviews</span>
                </Link>
              </DashboardNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Movie reviews</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {isAdmin && (
          <>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DashboardNavigationButton
                    isActive={dashboardPageContext.currentPage === 'Admin'}
                  >
                    <Link href={'/user/dashboard/admin'}>
                      <UserRoundCog className='h-5 w-5' />
                      <span className='sr-only'>Admin manage panel</span>
                    </Link>
                  </DashboardNavigationButton>
                </TooltipTrigger>
                <TooltipContent side='right'>Admin manage panel</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/*<TooltipProvider>*/}
            {/*  <Tooltip>*/}
            {/*    <TooltipTrigger asChild>*/}
            {/*      <Link*/}
            {/*        href='#'*/}
            {/*        className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'*/}
            {/*      >*/}
            {/*        <Users2 className='h-5 w-5' />*/}
            {/*        <span className='sr-only'>Customers</span>*/}
            {/*      </Link>*/}
            {/*    </TooltipTrigger>*/}
            {/*    <TooltipContent side='right'>Customers</TooltipContent>*/}
            {/*  </Tooltip>*/}
            {/*</TooltipProvider>*/}

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DashboardNavigationButton
                    isActive={dashboardPageContext.currentPage === 'AdminStats'}
                  >
                    <Link href={'/user/dashboard/stats'}>
                      <LineChart className='h-5 w-5' />
                      <span className='sr-only'>Analytics</span>
                    </Link>
                  </DashboardNavigationButton>
                </TooltipTrigger>
                <TooltipContent side='right'>Analytics</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        )}
      </nav>
      <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-4'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Settings className='h-5 w-5' />
                <span className='sr-only'>Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}

const DashboardNavigationButton = ({
  isActive = false,
  children
}: {
  isActive?: boolean
  children: ReactNode
}) => {
  return (
    <div
      className={cn({
        'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8':
          !isActive,
        'flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8':
          isActive
      })}
    >
      {children}
    </div>
  )
}
