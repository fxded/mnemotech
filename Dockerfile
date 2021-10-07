FROM node:slim

#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/node_modules
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

#USER node

RUN npm install
USER node

# Если вы создаете сборку для продакшн
# RUN npm ci --only=production
#https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable
#COPY --chown=node:node . .
COPY . .

EXPOSE 3010

CMD [ "node", "app.js" ]