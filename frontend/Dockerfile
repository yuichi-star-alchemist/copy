FROM node:22.11.0-slim
ENV NODE_ENV=development
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY ./public ./public
COPY ./__test__ ./__test__

ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev"]
