FROM node:12-alpine

ENV PORT 3000

RUN apk add --no-cache git tini
RUN mkdir app
WORKDIR app
COPY package.json package.json
RUN yarn install

COPY *.js ./

ENTRYPOINT ["tini", "--"]
CMD [ "node", "server.js" ]
