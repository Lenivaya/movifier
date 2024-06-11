import 'reflect-metadata'

import path from 'path'
import { applyResolversEnhanceMap } from '@/generated/type-graphql'
import { resolvers, resolversEnhanceMap } from '@/graphql/resolvers'
import { buildSchema } from 'type-graphql'
import authChecker from 'typegraphql-authchecker'

applyResolversEnhanceMap(resolversEnhanceMap)
buildSchema({
  resolvers,
  emitSchemaFile: path.resolve(__dirname, '../generated-schema.graphql'),
  authChecker: authChecker,
  validate: false
})
