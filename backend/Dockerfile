FROM node:14-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN npm install -g @nestjs/cli

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
