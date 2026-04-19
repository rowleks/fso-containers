FROM node:24-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

ENV DEBUG=playground:*

EXPOSE 3000

CMD ["npm", "run", "dev" ]
