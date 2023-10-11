FROM node:18-slim

WORKDIR /app

COPY ./package*.json ./
RUN npm ci
COPY . .

RUN npm install -g sequelize-cli
# CMD ["sh", "-c", "npm start"]

CMD ["npm", "start"]