export const envSchema = {
  type: 'object',
  required: ['PORT', 'DATABASE_URL'],
  properties: {
    PORT: {
      type: 'number',
      default: 4000
    },
    HOST: {
      type: 'string',
      default: '0.0.0.0'
    },
    DATABASE_URL: {
      type: 'string',
      default: 'postgresql://postgres:password@localhost:5432/postgres'
    },
    REDIS_URL: {
      type: 'string',
      default: 'redis://localhost:6379'
    },
    JWT_SECRET: {
      type: 'string',
      default: 'secret'
    },
    TMDB_API_KEY: {
      type: 'string',
      default: 'secret'
    }
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number
      HOST: string
      DATABASE_URL: string
      REDIS_URL: string
      JWT_SECRET: string
      TMDB_API_KEY: string
    }
  }
}
