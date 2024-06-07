'use client'

import { useGenresSuspenseQuery } from '@/lib'
import { Card, CardHeader, CardTitle } from '@/components/ui'
import { Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'

export default function GenresPage() {
  return (
    <main className={'h-[80vh] content-center'}>
      <div className={'p-5 m-5 mx-auto my-auto'}>
        <Suspense fallback={<AppLoader />}>
          <GenresListSuspense />
        </Suspense>
      </div>
    </main>
  )
}

function GenresListSuspense() {
  const { data } = useGenresSuspenseQuery({ fetchPolicy: 'cache-and-network' })

  return (
    <div className={'grid grid-cols-3 gap-5 mx-auto justify-center'}>
      {data.genres.map((genre) => (
        <Link href={`/movies/genre/${genre.name}`}>
          <Card>
            <CardHeader>
              <CardTitle>{genre.name}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}
