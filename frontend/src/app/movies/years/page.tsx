'use client'

import { useDecadesSuspenseQuery } from '@/lib'
import { Card, CardHeader, CardTitle } from '@/components/ui'
import { Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'

export default function YearsPage() {
  return (
    <main className={'h-[80vh] content-center'}>
      <div className={'p-5 m-5 mx-auto my-auto'}>
        <Suspense fallback={<AppLoader />}>
          <DecadesListSuspense />
        </Suspense>
      </div>
    </main>
  )
}

function DecadesListSuspense() {
  const { data } = useDecadesSuspenseQuery({ fetchPolicy: 'cache-and-network' })

  return (
    <div className={'grid grid-cols-3 gap-5 mx-auto justify-center'}>
      {data.getMovieDecades.decades.map((decade) => (
        <Link href={`/movies/decade/${decade}`}>
          <Card>
            <CardHeader>
              <CardTitle>{decade}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}
