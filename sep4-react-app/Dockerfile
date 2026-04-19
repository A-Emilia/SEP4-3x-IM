FROM node:20-alpine

WORKDIR /app

# package files
COPY package*.json ./
RUN npm install

# whole project
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]