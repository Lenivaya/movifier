import { useGetMoviesForPersonPageQuery } from '@/lib'
import { MovieCardList } from '@/components/movifier/movies/MovieCardList'
import React from 'react'
import { gql } from '@apollo/client'
import { MoviesPage } from '@/components/movifier/movies/MoviesPage/MoviesPage'
import { isSome } from '@/lib/types'

const GetMoviesForPersonPage = gql`
  query GetMoviesForPersonPage(
    $personId: String!
    $searchCriteria: MoviesSearchCriteriaInput!
    $orderBy: [MovieOrderByWithRelationAndSearchRelevanceInput!]
  ) {
    searchMovies(
      searchCriteria: $searchCriteria
      orderBy: $orderBy
      where: {
        crewMembers: {
          some: { crewMember: { is: { id: { equals: $personId } } } }
        }
      }
      take: 10
    ) {
      id
      ...MovieCardItem
    }
  }
`

export function PersonPageMovies({ personId }: { personId: string }) {
  return (
    <MoviesPage
      render={(searchCriteria, orderBy) => {
        const { data } = useGetMoviesForPersonPageQuery({
          variables: {
            personId,
            searchCriteria,
            orderBy: isSome(orderBy) ? [orderBy] : []
          },
          fetchPolicy: 'cache-and-network'
        })
        return (
          <div
            className={'flex flex-col w-full h-full justify-start max-w-5xl'}
          >
            <MovieCardList movies={data?.searchMovies ?? []} />
          </div>
        )
      }}
    />
  )
}
