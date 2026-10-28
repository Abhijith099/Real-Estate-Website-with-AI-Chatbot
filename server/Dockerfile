FROM node:20-alpine

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (including devDependencies so prisma CLI is available)
RUN npm install

# Generate Prisma Client
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose Render default port
EXPOSE 8000

CMD ["node", "index.js"]

