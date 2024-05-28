import { ApolloCache, Reference, StoreObject } from '@apollo/client'
import { ToReferenceFunction } from '@apollo/client/cache/core/types/common'
import { AsStoreObject } from '@apollo/client/utilities'
import { O, Option } from '@mobily/ts-belt'
import { GraphQLError } from 'graphql/error'

// Working with cache directly
export const apolloObjectRemover = (
  cache: ApolloCache<any>,
  object: Option<StoreObject | Reference>,
  errors: Option<ReadonlyArray<GraphQLError>>
) => {
  if (O.isSome(errors) || O.isNone(object)) return

  const normalizedId = cache.identify(object)
  cache.evict({ id: normalizedId })
  cache.gc()
}

export const apolloNewItemAdder = <
  TItem extends {
    __typename?: string
  }
>(
  existingItemRefs: ReadonlyArray<Reference | AsStoreObject<TItem>>,
  newItem: Option<TItem>,
  toReference: ToReferenceFunction
) => {
  if (O.isNone(newItem)) return existingItemRefs

  const newItemRef = toReference(newItem)
  if (O.isNone(newItemRef)) return existingItemRefs

  return O.isNone(newItemRef)
    ? existingItemRefs
    : [...existingItemRefs, newItemRef]
}
