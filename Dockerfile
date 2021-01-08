FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN rm -rf node_modules

EXPOSE 3000

CMD [ "node", "server.js" ]
