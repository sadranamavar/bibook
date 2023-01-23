FROM node:lts-alpine

WORKDIR /code

ENV PATH /app/node_modules/.bin:$PATH

COPY app/package.json ./

COPY app/package-lock.json ./

RUN npm install



