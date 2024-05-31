'use client'

import * as React from 'react'
import { ReactNode } from 'react'
import { SettingsPageProviders } from '@/app/user/dashboard/settingsPageProviders'
import {
  Clock,
  HeartIcon,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  Users2
} from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui'
import { Link } from 'next-view-transitions'
import { cn } from '@/lib'
import { useSettingsPage } from '@/app/user/dashboard/settingsPageContext'

export default function SettingsPageLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <SettingsPageProviders>
      <div className='flex relative h-dvh w-full flex-col bg-muted/40'>
        <SettingsPageNavbar />
        {children}
      </div>
    </SettingsPageProviders>
  )
}

export function SettingsPageNavbar() {
  const { settingsPageContext } = useSettingsPage()

  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-4 mt-20'>
        <Link
          href='#'
          className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
        >
          <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
          <span className='sr-only'>Acme Inc</span>
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SettingsNavigationButton
                isActive={settingsPageContext.currentPage === 'Home'}
              >
                <Link href='/user/dashboard'>
                  <Home className='h-5 w-5' />
                  <span className='sr-only'>Dashboard</span>
                </Link>
              </SettingsNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <SettingsNavigationButton
                isActive={settingsPageContext.currentPage === 'Watchlist'}
              >
                <Link href='/user/dashboard/watchlist'>
                  <Clock className='h-5 w-5' />
                  <span className='sr-only'>Watchlist</span>
                </Link>
              </SettingsNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Watchlist</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <SettingsNavigationButton
                isActive={settingsPageContext.currentPage === 'Liked'}
              >
                <Link href='/user/dashboard/liked'>
                  <HeartIcon className='h-5 w-5' />
                  <span className='sr-only'>Liked movies</span>
                </Link>
              </SettingsNavigationButton>
            </TooltipTrigger>
            <TooltipContent side='right'>Liked movies</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <Users2 className='h-5 w-5' />
                <span className='sr-only'>Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Customers</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
              >
                <LineChart className='h-5 w-5' />
                <span className='sr-only'>Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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

export const SettingsNavigationButton = ({
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
