## Зависимости (a.k.a. самый долгий и тяжелый стейдж) ## 
FROM node:14.16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-optional
# Сразу облегчаем node_modules
RUN npm i -g modclean && modclean -r

## Тест\девелопмент стейджы ##
FROM deps as base
COPY . .

FROM base as test
CMD ["sh", "scripts/test.sh"]

FROM base as development
CMD ["npm", "run", "dev"]

## Билд-стейдж ##
FROM deps as builder
# Невозможно совместить COPY . . отсюда и из base, т.к
# если сначала вызывать npm prune, то test/development не запустятся,
# а если сначала вызывать COPY . ., то долгий prune будет работать при любом изменении кода
RUN npm prune --production
COPY . .
ENV NODE_ENV production
RUN npm run build
# В рантайме не нужен тяжеловесный компилятор
RUN rm -rf node_modules/@next/swc*

## Минимальный продакшн-образ, содержащий только рантайм-зависимости ##
FROM gcr.io/distroless/nodejs:14 AS production
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/.next ./.next

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000
CMD ["./node_modules/next/dist/bin/next", "start"]
