FROM node:14.16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM deps as base
COPY --from=deps /app/node_modules ./node_modules
COPY . .

FROM base as test
CMD ["sh", "scripts/test.sh"]

FROM base AS builder
ENV NODE_ENV production
RUN npm run build

# Production image, copy all the files and run next
FROM node:14.16-alpine AS production
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

USER nextjs

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000
CMD ["npm", "start"]