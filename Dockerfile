FROM node:20-alpine

WORKDIR /app

# Copy server package definitions and prisma schema
COPY server/package*.json ./
COPY server/prisma ./prisma/

# Install dependencies and generate Prisma Client
RUN npm install
RUN npx prisma generate

# Copy the server source code
COPY server/ .

# Port for Render
EXPOSE 8000

CMD ["node", "index.js"]

