# Use official Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port
#EXPOSE 3000
EXPOSE 80:3000

# Run app
CMD ["node", "index.js"]