FROM node:16

RUN mkdir -p /src/back

WORKDIR /src/back

COPY package*.json ./

RUN npm install -g nodemon

EXPOSE 5001

CMD [ "npm", "start" ]
