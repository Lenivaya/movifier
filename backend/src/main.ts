import "reflect-metadata";

import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import fastifyEnv from "@fastify/env";
import { envSchema } from "@/env/schema";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { createYoga } from "graphql-yoga";
import { renderGraphiqlWithApolloPlayground } from "@/utils/graphql-playground/renderGraphiqlWithApolloPlayground";
import { useParserCache } from "@envelop/parser-cache";
import { useValidationCache } from "@envelop/validation-cache";
import { useResponseCache } from "@envelop/response-cache";
import { createRedisCache } from "@envelop/response-cache-redis";
import { createFetch } from "@whatwg-node/fetch";
import { useAPQ } from "@graphql-yoga/plugin-apq";
import { resolvers, resolversEnhanceMap } from "@/graphql/resolvers";
import { applyResolversEnhanceMap } from "@/generated/type-graphql";
import { useJWT } from "@graphql-yoga/plugin-jwt";
import { AppContext } from "@/graphql/context";
import Redis from "ioredis";

export const app = fastify({
  logger: true,
})
  .register(cors)
  .register(fastifyEnv, {
    schema: envSchema,
    dotenv: true,
    data: process.env,
  });

export async function main() {
  await app.after();

  const redis = new Redis(app.config.REDIS_URL);
  const cache = createRedisCache({ redis });

  applyResolversEnhanceMap(resolversEnhanceMap);

  const schema = await buildSchema({
    resolvers,
    // emitSchemaFile: path.resolve(__dirname, "../generated-schema.graphql"),
    validate: false,
  });

  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
  await prisma.$connect();

  const yoga = createYoga<{
    req: FastifyRequest;
    reply: FastifyReply;
  }>({
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg)),
    },
    schema,
    renderGraphiQL: renderGraphiqlWithApolloPlayground,
    batching: true,
    cors: {
      origin: "*",
      credentials: true,
    },
    context: ({}): AppContext => ({
      prisma,
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useResponseCache({
        ttl: 5000,
        cache,
        session: (context) => null,
        invalidateViaMutation: true,
      }),
      useAPQ({
        store: {
          async get(key) {
            try {
              return await redis.get(key);
            } catch (e) {
              console.error(`Error while fetching the operation: ${key}`, e);
            }
          },
          async set(key, value) {
            try {
              return await redis.set(key, value);
            } catch (e) {
              console.error(`Error while saving the operation: ${key}`, e);
            }
          },
        },
      }),
      // useGraphQlJit({}),
      // useApolloTracing(),
      // useSentry({
      //   includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
      //   // includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
      //   includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      // }),
      useJWT({
        issuer: "movifier.org",
        signingKey: app.config.JWT_SECRET,
        algorithms: ["HS256"],
      }),
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
        headerSize: 1000000,
      },
    }),
  });

  app.route({
    url: "/graphql",
    method: ["GET", "POST", "OPTIONS", "PUT"],
    handler: async (req, reply) => {
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply,
      });
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      reply.status(response.status);
      reply.send(response.body);

      return reply;
    },
  });

  app
    .listen({ port: app.config.PORT })
    .then((address) => console.log(`server listening on ${address}`))
    .catch((err) => {
      console.log("Error starting server:", err);
      process.exit(1);
    });
}
