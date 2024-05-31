import { HTTP_ENDPOINT, WS_ENDPOINT } from '@/lib/graphql/ApolloClient/common'
import { HttpLink } from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

export const httpLink = new HttpLink({
  uri: HTTP_ENDPOINT
})

export const wsLink = new GraphQLWsLink(
  createClient({
    url: WS_ENDPOINT
  })
)
