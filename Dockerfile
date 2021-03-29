FROM node:15.12.0-alpine3.13

COPY docker /

WORKDIR /app

COPY node/package*.json ./ 

RUN npm i && \
  apk add --no-cache git

COPY node/ ./

EXPOSE 8080

CMD [ "node", "app.js" ]
