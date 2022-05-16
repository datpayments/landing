FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.21.6-alpine
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build ./app/build /usr/share/nginx/html