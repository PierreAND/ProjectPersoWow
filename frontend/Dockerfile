FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start"]