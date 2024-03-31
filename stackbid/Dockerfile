# Using an official Node.js runtime as the base image
FROM node:14

# Setting the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install
RUN npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome


# Copy the entire project to the working directory
COPY . .

# Expose the port that the server will run on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
