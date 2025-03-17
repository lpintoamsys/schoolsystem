# Use the official Node.js 18 image as the base image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application for production
RUN npm run build

# Use the official Node.js 18 image with the 'slim' variant for the production image
FROM node:18-alpine AS production

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the base image
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package*.json ./
COPY --from=base /app/next.config.js ./

# Set environment variables
ENV NODE_ENV production

# Expose the port that Next.js will listen on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]