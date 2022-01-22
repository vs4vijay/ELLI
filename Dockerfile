FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

# USER node

RUN npm install

COPY . ./
# COPY --chown=node:node . ./

ENV APP_PORT 9099

EXPOSE ${APP_PORT}

CMD ["node", "src/app.js"]
