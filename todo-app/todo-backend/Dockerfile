FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

USER node

ENV DEBUG=playground:*

EXPOSE 3000

CMD ["npm", "start" ]
