# Dockerfile  
FROM node:14.3.0-stretch-slim

RUN mkdir -p /home/backend

COPY ./package*.json /home/backend/

WORKDIR /home/backend

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server"]