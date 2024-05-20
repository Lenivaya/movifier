import { StrictTypedTypePolicies } from '@/lib'
import { trackedParcelIdsTypePolicy } from '@/lib/graphql/ApolloClient/cache/policies/trackedParcelIdsTypePolicy'

export const appTypePolicies: StrictTypedTypePolicies = {
  ...trackedParcelIdsTypePolicy
}
