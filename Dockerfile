FROM node:20-alpine AS builder

WORKDIR /src/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /src/app

COPY --from=builder /src/app/package*.json ./
COPY --from=builder /src/app/node_modules ./node_modules
COPY --from=builder /src/app/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/main"]