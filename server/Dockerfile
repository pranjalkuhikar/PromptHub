# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose the port your app runs on (assuming your server listens on port 8080)
EXPOSE 8080

# Command to run the compiled JavaScript application
CMD ["node", "dist/server.js"]