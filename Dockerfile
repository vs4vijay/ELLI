FROM node:10.10.0-alpine

WORKDIR /app

COPY package*.json ./

# USER node

RUN npm install

COPY . ./
# COPY --chown=node:node . ./

ENV APP_PORT 3333

EXPOSE ${APP_PORT}

CMD ["node", "src/app.js"]
