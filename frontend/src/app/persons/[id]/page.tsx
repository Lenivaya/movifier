'use client'

import { gql } from '@apollo/client'
import { useGetPersonForPageSuspenseQuery } from '@/lib'
import { PersonPage } from '@/components/movifier/persons/PersonPage/PersonPage'
import { isNone } from '@/lib/types'
import { AppLoader } from '@/components/movifier/generic'
import { Suspense } from 'react'

const GetPersonForPage = gql`
  query GetPersonForPage($id: String!) {
    movieCrewMember(where: { id: $id }) {
      ...PersonPageItem
    }
  }
`

export default function OnePersonPage({ params }: { params: { id: string } }) {
  return (
    <main
      className={
        'items-center flex flex-col justify-center w-full min-h-screen h-max p-10 overflow-y-scroll'
      }
    >
      <div
        className={
          'ml-5 mr-5 mb-5 p-5 h-auto max-md:w-full max-lg:w-5/6 max-xl:w-3/4 w-7/12 mx-auto'
        }
      >
        <Suspense fallback={<AppLoader />}>
          <PersonPageSuspense id={params.id} />
        </Suspense>
      </div>
    </main>
  )
}

function PersonPageSuspense({ id }: { id: string }) {
  const { data } = useGetPersonForPageSuspenseQuery({
    variables: { id },
    fetchPolicy: 'cache-and-network'
  })

  const person = data?.movieCrewMember

  if (isNone(person)) return null

  return <PersonPage {...person} />
}
