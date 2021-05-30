FROM node:14

# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./

EXPOSE 8081 5000

CMD npm run backend & npm run serve



