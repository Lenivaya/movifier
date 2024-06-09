'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Link } from 'next-view-transitions'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MovieGenresAdminPage } from '@/components/movifier/genres/MovieGenresAdminPage/MovieGenresAdminPage'
import { useDashboardPage } from '@/app/user/dashboard/dashboardPageContext'
import { useEffect } from 'react'

export default function AdminPage() {
  const { setDashboardPageContext } = useDashboardPage()

  useEffect(() => {
    setDashboardPageContext((prev) => ({ ...prev, currentPage: 'Admin' }))
  }, [])

  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
      <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
        <Breadcrumb className='hidden md:flex'>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='#'>Admin</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 h-dvh'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='grid'>
            <Card className='sm:col-span-2'>
              <CardHeader className='pb-3 w-full'>
                <CardTitle>Admin page</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Some content management system here
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue={'genres'} className={'h-full'}>
            <TabsList className='grid w-full grid-cols-2 mb-5'>
              <TabsTrigger value='genres'>Genres</TabsTrigger>
              <TabsTrigger value='crew-member-types'>
                Crew member types
              </TabsTrigger>
            </TabsList>

            <TabsContent value='genres'>
              <MovieGenresAdminPage />
            </TabsContent>

            <TabsContent value='crew-member-types'>
              <p>yes</p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
