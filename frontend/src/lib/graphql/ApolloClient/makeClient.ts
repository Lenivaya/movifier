import { ApolloLink, HttpLink, split } from '@apollo/client'
import { authLink, HTTP_ENDPOINT, persistedQueryLink, wsLink } from '@/lib'
import { getMainDefinition } from '@apollo/client/utilities'
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { appTypePolicies } from '@/lib/graphql/ApolloClient/cache/appTypePolicies'
import { isBrowser } from 'browser-or-node'
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist'

export const makeClient = () => {
  const httpLink = new HttpLink({
    uri: HTTP_ENDPOINT
  })

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink,
    httpLink
  )

  const cache = new NextSSRInMemoryCache({ typePolicies: appTypePolicies })

  isBrowser &&
    persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage)
    })

  return new NextSSRApolloClient({
    connectToDevTools: process.env.NODE_ENV === 'development',
    cache,
    link: isBrowser
      ? ApolloLink.from([persistedQueryLink, authLink, splitLink])
      : ApolloLink.from([
          persistedQueryLink,
          new SSRMultipartLink({
            stripDefer: true
          }),
          authLink,
          splitLink
        ])
  })
}
