'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { gql } from '@apollo/client'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { useEffect } from 'react'
import { useSettingsPage } from '@/app/user/dashboard/settingsPageContext'

export const GET_USER_WATCHLIST = gql`
  query GetUserWatchlist(
    $searchCriteria: MoviesSearchCriteriaInput!
    $userId: String!
  ) {
    searchMovies(
      searchCriteria: $searchCriteria
      where: { inWatchlistByUsers: { some: { userId: { equals: $userId } } } }
      orderBy: [{ createdAt: desc }]
    ) {
      ...MovieCardItem
    }
  }
`

export default function SettingsPage() {
  return <SettingsHomeDashboard />
}

export function SettingsHomeDashboard() {
  const { setSettingsPageContext } = useSettingsPage()

  useEffect(() => {
    setSettingsPageContext((prev) => ({ ...prev, currentPage: 'Home' }))
  }, [])

  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
        <Breadcrumb className='hidden md:flex'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Settings</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'></main>
    </div>
  )
}
