FROM node:22.10.0-alpine3.20 AS front-end-build

# Set working directory
WORKDIR /src

# Copy the frontend package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]