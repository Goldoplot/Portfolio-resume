# Build Vite
FROM node:20 as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Apache
FROM php:8.2-apache

COPY --from=build /app/dist /var/www/html