FROM node:lts-alpine AS base


# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN rm .env
COPY .env.docker .env

RUN corepack enable pnpm

RUN pnpm prisma generate --generator client
RUN pnpm run build:compile


FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/ ./

USER nextjs

EXPOSE 4000

ENV PORT 4000

CMD HOST="0.0.0.0" node build/src/index.js
