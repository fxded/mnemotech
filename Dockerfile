FROM node:lts-slim

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

#USER node

RUN npm install

#COPY --chown=node:node . .
COPY . .

EXPOSE 3010

CMD [ "node", "app.js" ]