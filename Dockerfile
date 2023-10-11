FROM node:16-slim

WORKDIR /app

COPY ./package*.json ./
RUN npm ci
COPY . .

# CMD ["sh", "-c", "npm start"]

CMD ["npm", "dev"]