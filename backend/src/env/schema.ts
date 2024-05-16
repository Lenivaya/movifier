export const envSchema = {
  type: "object",
  required: ["PORT", "DATABASE_URL"],
  properties: {
    PORT: {
      type: "number",
      default: 4000,
    },
    DATABASE_URL: {
      type: "string",
      default: "postgresql://postgres:password@localhost:5432/postgres",
    },
    REDIS_URL: {
      type: "string",
      default: "redis://localhost:6379",
    },
  },
};

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: number;
      DATABASE_URL: string;
      REDIS_URL: string;
    };
  }
}
