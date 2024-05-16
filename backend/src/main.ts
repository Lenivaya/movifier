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
import { createFetch } from "@whatwg-node/fetch";
import { useAPQ } from "@graphql-yoga/plugin-apq";
import { resolvers } from "@generated/type-graphql";

export async function main() {
  const app = fastify({
    logger: true,
  })
    .register(cors)
    .register(fastifyEnv, {
      schema: envSchema,
      dotenv: true,
      data: process.env,
    });

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
    //context: contextCreator,
    batching: true,
    cors: {
      origin: "*",
      credentials: true,
    },
    context: ({}) => ({
      prisma,
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useAPQ({}),
      // useGraphQlJit({}),
      // useApolloTracing(),
      // useSentry({
      //   includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
      //   // includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
      //   includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      // }),
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
    method: ["GET", "POST", "OPTIONS"],
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

  await app.after();

  app
    .listen({ port: app.config.PORT })
    .then((address) => console.log(`server listening on ${address}`))
    .catch((err) => {
      console.log("Error starting server:", err);
      process.exit(1);
    });
}
