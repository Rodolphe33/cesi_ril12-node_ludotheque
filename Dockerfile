FROM node:15.12.0-alpine3.13

WORKDIR /app

COPY node/package*.json ./ 

RUN npm i && \
  apk add --no-cache git docker openrc && \
  rc-update add docker boot

COPY node/ ./

COPY docker ./docker

EXPOSE 8080

CMD [ "node", "app.js" ]
