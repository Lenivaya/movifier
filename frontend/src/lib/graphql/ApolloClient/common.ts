// import { StrictTypedTypePolicies } from "@/lib/graphql/__generated__/graphql";
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev'
import { setContext } from '@apollo/client/link/context'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { isBrowser } from 'browser-or-node'
import { sha256 as sha256Nobel } from '@noble/hashes/sha256'
import { toString as hashToString } from 'uint8arrays/to-string'

const sha256 = async (input: string) => hashToString(sha256Nobel(input), 'hex')

export const HTTP_ENDPOINT = process.env.NEXT_PUBLIC_API_URL
export const WS_ENDPOINT = process.env.NEXT_PUBLIC_API_WS_URL ?? ''

export const authLink = setContext((_, { headers, ...context }) => {
  const token = isBrowser ? localStorage?.getItem('auth:token') : null
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {})
    },
    ...context
  }
})

export const persistedQueryLink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true
})

if (process.env.NODE_ENV === 'development') {
  loadDevMessages()
  loadErrorMessages()
}
