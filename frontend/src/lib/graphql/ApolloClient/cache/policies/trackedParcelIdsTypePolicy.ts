import { StrictTypedTypePolicies } from '@/lib'
import makeVarPersisted from '@/lib/graphql/ApolloClient/cache/persistentReactiveVariables'

export const trackedParcelIdsTypePolicy: StrictTypedTypePolicies = {
  Query: {
    fields: {
      trackedParcelsIds: {
        read() {
          return trackedParcelsIds()
        }
      }
    }
  }
}

export const trackedParcelsIds = makeVarPersisted<string[]>(
  [],
  'trackedParcelsIds'
)
