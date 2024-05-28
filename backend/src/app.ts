import 'reflect-metadata'

import Redis from 'ioredis'
import { PrismaClient } from '@prisma/client'
import { createYoga, useExecutionCancellation } from 'graphql-yoga'
import { renderGraphiqlWithApolloPlayground } from '@/utils/graphql-playground/renderGraphiqlWithApolloPlayground'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { useResponseCache } from '@envelop/response-cache'
import { createRedisCache } from '@envelop/response-cache-redis'
import { createFetch } from '@whatwg-node/fetch'
import { useAPQ } from '@graphql-yoga/plugin-apq'
import { resolvers, resolversEnhanceMap } from '@/graphql/resolvers'
import { applyResolversEnhanceMap } from '@/generated/type-graphql'
import { useJWT } from '@graphql-yoga/plugin-jwt'
import { AppContext } from '@/graphql/context'
import { buildSchema } from 'type-graphql'
import cors from '@fastify/cors'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'
import fastifyEnv from '@fastify/env'
import { envSchema } from '@/env/schema'
import { costLimitPlugin } from '@escape.tech/graphql-armor-cost-limit'
import { maxTokensPlugin } from '@escape.tech/graphql-armor-max-tokens'
import { maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth'
import { maxDirectivesPlugin } from '@escape.tech/graphql-armor-max-directives'
import { maxAliasesPlugin } from '@escape.tech/graphql-armor-max-aliases'

export const app = fastify({
  logger: true
})
  .register(cors)
  .register(fastifyEnv, {
    schema: envSchema,
    dotenv: true,
    data: process.env
  })

export const graphqlArmorPlugins = [
  costLimitPlugin(),
  maxTokensPlugin(),
  // maxDepthPlugin({ n: 8 }),
  maxDepthPlugin({ n: 12 }),
  maxDirectivesPlugin(),
  maxAliasesPlugin()
]

export async function buildApp() {
  await app.after()

  const redis = new Redis(app.config.REDIS_URL)
  const cache = createRedisCache({ redis })

  applyResolversEnhanceMap(resolversEnhanceMap)
  const schema = await buildSchema({
    resolvers,
    validate: false
  })

  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
  })
  await prisma.$connect()

  const graphqlServer = createYoga<{
    req: FastifyRequest
    reply: FastifyReply
  }>({
    logging: {
      debug: (...args) => {
        for (const arg of args) app.log.debug(arg)
      },
      info: (...args) => {
        for (const arg of args) app.log.info(arg)
      },
      warn: (...args) => {
        for (const arg of args) app.log.warn(arg)
      },
      error: (...args) => {
        for (const arg of args) app.log.error(arg)
      }
    },
    schema,
    renderGraphiQL: renderGraphiqlWithApolloPlayground,
    batching: true,
    cors: {
      origin: '*',
      credentials: true
    },
    context: ({}): AppContext => ({
      prisma
    }),
    plugins: [
      ...graphqlArmorPlugins,
      useExecutionCancellation(),
      useParserCache({}),
      useValidationCache({}),
      useResponseCache({
        ttl: 2_000,
        ttlPerType: {
          MovieWatchedByUser: 1_000
        },
        cache,
        session: (_context) => null,
        invalidateViaMutation: true
      }),
      useAPQ({
        store: {
          async get(key) {
            try {
              return await redis.get(key)
            } catch (e) {
              console.error(`Error while fetching the operation: ${key}`, e)
            }
          },
          async set(key, value) {
            try {
              return await redis.set(key, value)
            } catch (e) {
              console.error(`Error while saving the operation: ${key}`, e)
            }
          }
        }
      }),
      // useGraphQlJit({}),
      useJWT({
        issuer: 'movifier.org',
        signingKey: app.config.JWT_SECRET,
        algorithms: ['HS256']
      })
    ],
    fetchAPI: createFetch({
      // We prefer `node-fetch` over `undici` and current unstable Node's implementation
      useNodeFetch: true,
      formDataLimits: {
        // Maximum allowed file size (in bytes)
        fileSize: 1000000,
        // Maximum allowed number of files
        files: 10,
        // Maximum allowed size of content (operations, variables etc...)
        fieldSize: 1000000,
        // Maximum allowed header size for form data
        headerSize: 1000000
      }
    })
  })

  app.addContentTypeParser('multipart/form-data', {}, (_req, _payload, done) =>
    done(null)
  )

  app.route({
    url: graphqlServer.graphqlEndpoint,
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      const response = await graphqlServer.handleNodeRequestAndResponse(
        req,
        reply,
        {
          req,
          reply
        }
      )
      for (const [name, value] of response.headers) {
        reply.header(name, value)
      }

      reply.status(response.status)
      reply.send(response.body)

      return reply
    }
  })

  return [app, graphqlServer.graphqlEndpoint] as const
}
