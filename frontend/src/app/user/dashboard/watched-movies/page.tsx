'use client'

import * as React from 'react'
import { Suspense, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  Search
} from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationItem
} from '@/components/ui/pagination'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { gql } from '@apollo/client'
import {
  MoviesSearchCriteriaInput,
  useGetUserWatchedMoviesSuspenseQuery
} from '@/lib'
import { useCurrentUser } from '@/lib/hooks/CurrentUser'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import { useMutative } from 'use-mutative'
import { F } from '@mobily/ts-belt'
import { useSettingsPage } from '@/app/user/dashboard/settingsPageContext'
import { AppLoader } from '@/components/movifier/generic'

const GET_USER_WATCHED_MOVIES = gql`
  query GetUserWatchedMovies(
    $searchCriteria: MoviesSearchCriteriaInput!
    $userId: String!
  ) {
    searchMovies(
      searchCriteria: $searchCriteria
      where: { watchedBy: { some: { userId: { equals: $userId } } } }
      orderBy: [{ createdAt: desc }]
    ) {
      ...MovieCardItem
    }
  }
`

export default function SettingsWatchedMoviesPage() {
  return <WatchedMovies />
}

export function WatchedMovies() {
  const { setSettingsPageContext } = useSettingsPage()

  const [searchCriteria, setSearchCriteria] =
    useMutative<MoviesSearchCriteriaInput>({
      search: ''
    })

  const criteriaChanger =
    (field: keyof MoviesSearchCriteriaInput) => (value: string) =>
      setSearchCriteria((_prev) => ({ [field]: value }))

  useEffect(() => {
    setSettingsPageContext((prev) => ({
      ...prev,
      currentPage: 'WatchedMovies'
    }))
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
                <Link href='#'>Watched movies</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className='relative ml-auto flex-1 md:grow-0'>
          <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
          <Input
            onChange={F.debounce(
              (e) => criteriaChanger('search')(e.target.value),
              300
            )}
            type='search'
            placeholder='Search...'
            className='w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]'
          />
        </div>
      </header>

      <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3'>
        <div className='grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2'>
          <div className='grid'>
            <Card className='sm:col-span-2' x-chunk='dashboard-05-chunk-0'>
              <CardHeader className='pb-3 w-full'>
                <CardTitle>Your watched movies</CardTitle>
                <CardDescription className='max-w-lg text-balance leading-relaxed'>
                  Movies you have already watched
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Tabs defaultValue='week'>
            <div className='flex items-center'>
              <TabsList>
                <TabsTrigger value='week'>Week</TabsTrigger>
                <TabsTrigger value='month'>Month</TabsTrigger>
                <TabsTrigger value='year'>Year</TabsTrigger>
              </TabsList>
              <div className='ml-auto flex items-center gap-2'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='outline'
                      size='sm'
                      className='h-7 gap-1 text-sm'
                    >
                      <ListFilter className='h-3.5 w-3.5' />
                      <span className='sr-only sm:not-sr-only'>Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Fulfilled
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Declined
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Refunded
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  size='sm'
                  variant='outline'
                  className='h-7 gap-1 text-sm'
                >
                  <File className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only'>Export</span>
                </Button>
              </div>
            </div>
            <TabsContent value='week'>
              <Card x-chunk='dashboard-05-chunk-3'>
                <CardHeader className='px-7'>
                  <CardTitle>Watched movies</CardTitle>
                  <CardDescription>Recent movies you watched</CardDescription>
                </CardHeader>
                <CardContent>
                  <Suspense fallback={<AppLoader />}>
                    <MovieCardListSuspense searchCriteria={searchCriteria} />
                  </Suspense>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className='overflow-hidden' x-chunk='dashboard-05-chunk-4'>
            <CardHeader className='flex flex-row items-start bg-muted/50'>
              <div className='grid gap-0.5'>
                <CardTitle className='group flex items-center gap-2 text-lg'>
                  Watched movies statistics
                  <Button
                    size='icon'
                    variant='outline'
                    className='h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100'
                  >
                    <Copy className='h-3 w-3' />
                    <span className='sr-only'>Copy Order ID</span>
                  </Button>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className='p-6 text-sm'>
              <div className='grid gap-3'>
                <div className='font-semibold'>Order Details</div>
                <ul className='grid gap-3'>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>
                      Glimmer Lamps x <span>2</span>
                    </span>
                    <span>$250.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>
                      Aqua Filters x <span>1</span>
                    </span>
                    <span>$49.00</span>
                  </li>
                </ul>
                <Separator className='my-2' />
                <ul className='grid gap-3'>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Subtotal</span>
                    <span>$299.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Shipping</span>
                    <span>$5.00</span>
                  </li>
                  <li className='flex items-center justify-between'>
                    <span className='text-muted-foreground'>Tax</span>
                    <span>$25.00</span>
                  </li>
                  <li className='flex items-center justify-between font-semibold'>
                    <span className='text-muted-foreground'>Total</span>
                    <span>$329.00</span>
                  </li>
                </ul>
              </div>
              <Separator className='my-4' />
              <div className='grid grid-cols-2 gap-4'>
                <div className='grid gap-3'>
                  <div className='font-semibold'>Shipping Information</div>
                  <address className='grid gap-0.5 not-italic text-muted-foreground'>
                    <span>Liam Johnson</span>
                    <span>1234 Main St.</span>
                    <span>Anytown, CA 12345</span>
                  </address>
                </div>
                <div className='grid auto-rows-max gap-3'>
                  <div className='font-semibold'>Billing Information</div>
                  <div className='text-muted-foreground'>
                    Same as shipping address
                  </div>
                </div>
              </div>
              <Separator className='my-4' />
              <div className='grid gap-3'>
                <div className='font-semibold'>Customer Information</div>
                <dl className='grid gap-3'>
                  <div className='flex items-center justify-between'>
                    <dt className='text-muted-foreground'>Customer</dt>
                    <dd>Liam Johnson</dd>
                  </div>
                  <div className='flex items-center justify-between'>
                    <dt className='text-muted-foreground'>Email</dt>
                    <dd>
                      <a href='mailto:'>liam@acme.com</a>
                    </dd>
                  </div>
                  <div className='flex items-center justify-between'>
                    <dt className='text-muted-foreground'>Phone</dt>
                    <dd>
                      <a href='tel:'>+1 234 567 890</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <Separator className='my-4' />
              <div className='grid gap-3'>
                <div className='font-semibold'>Payment Information</div>
                <dl className='grid gap-3'>
                  <div className='flex items-center justify-between'>
                    <dt className='flex items-center gap-1 text-muted-foreground'>
                      <CreditCard className='h-4 w-4' />
                      Visa
                    </dt>
                    <dd>**** **** **** 4532</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
            <CardFooter className='flex flex-row items-center border-t bg-muted/50 px-6 py-3'>
              <div className='text-xs text-muted-foreground'>
                Updated <time dateTime='2023-11-23'>November 23, 2023</time>
              </div>
              <Pagination className='ml-auto mr-0 w-auto'>
                <PaginationContent>
                  <PaginationItem>
                    <Button size='icon' variant='outline' className='h-6 w-6'>
                      <ChevronLeft className='h-3.5 w-3.5' />
                      <span className='sr-only'>Previous Order</span>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button size='icon' variant='outline' className='h-6 w-6'>
                      <ChevronRight className='h-3.5 w-3.5' />
                      <span className='sr-only'>Next Order</span>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

const MovieCardListSuspense = ({
  searchCriteria
}: {
  searchCriteria: MoviesSearchCriteriaInput
}) => {
  const user = useCurrentUser()
  const { data } = useGetUserWatchedMoviesSuspenseQuery({
    variables: { searchCriteria, userId: user?.id ?? '' },
    fetchPolicy: 'cache-and-network'
  })

  return <MovieCardList movies={data?.searchMovies} />
}
