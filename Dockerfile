FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

USER nodejs

EXPOSE 80

ENV NODE_ENV production

CMD ["node", "dist/index.js"]
