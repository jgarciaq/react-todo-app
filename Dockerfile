FROM node:latest

RUN mkdir -p /home/node/react-todo-app/node_modules && chown -R node:node /home/node/react-todo-app

WORKDIR /home/node/react-todo-app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "start" ]

