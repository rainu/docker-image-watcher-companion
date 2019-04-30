FROM node:11-alpine as build

WORKDIR /build
ADD index.js /build/index.js
ADD package.json /build

RUN npm i && npm run build

FROM node:11-alpine

WORKDIR /app
COPY --from=build /build/dist/main.js /app/main.js

ENTRYPOINT ["node", "/app/main.js"]