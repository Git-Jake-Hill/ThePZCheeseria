FROM node:22.10.0-alpine3.20 AS back-end-build

# Set working directory
WORKDIR /src

# Copy the backend package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the backend source code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]