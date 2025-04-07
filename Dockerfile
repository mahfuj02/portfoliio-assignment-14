FROM node:18-alpine as build

# Set working directory
WORKDIR /lastName_firstName_final_site

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production environment
FROM nginx:stable-alpine

# Copy build files from build stage
COPY --from=build /lastName_firstName_final_site/dist /usr/share/nginx/html

# Copy custom nginx config to serve React app properly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]