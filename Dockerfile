FROM node:22

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 2918

CMD ["npm", "run", "dev"]
