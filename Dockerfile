FROM node:12

WORKDIR /home/app

COPY . .

RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD [ "node", "server.js" ]
