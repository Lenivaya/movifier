'use client'

import { useGetSpokenLanguagesSuspenseQuery } from '@/lib'
import { Card, CardHeader, CardTitle } from '@/components/ui'
import { Suspense } from 'react'
import { AppLoader } from '@/components/movifier/generic'
import { Link } from 'next-view-transitions'
import { gql } from '@apollo/client'

const GetLanguages = gql`
  query GetSpokenLanguages {
    movieSpokenLanguages {
      iso_639_1
      name
    }
  }
`

export default function LanguagesPage() {
  return (
    <main className={'h-[80vh] content-center'}>
      <div className={'p-5 m-5 mx-auto my-auto'}>
        <Suspense fallback={<AppLoader />}>
          <LanguagesListSuspense />
        </Suspense>
      </div>
    </main>
  )
}

function LanguagesListSuspense() {
  const { data } = useGetSpokenLanguagesSuspenseQuery({
    fetchPolicy: 'cache-and-network'
  })

  return (
    <div className={'grid grid-cols-3 gap-5 mx-auto justify-center'}>
      {data.movieSpokenLanguages.map((lang) => (
        <Link href={`/movies/language/${lang.iso_639_1}`}>
          <Card>
            <CardHeader>
              <CardTitle>{lang.name}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}
