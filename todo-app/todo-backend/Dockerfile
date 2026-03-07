FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

USER node

RUN npm ci

ENV DEBUG=playground:*

EXPOSE 3000

CMD ["npm", "start" ]
