FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /kaur_kiranjot_final_site
COPY --from=build /app/build /kaur_kiranjot_final_site
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5575
CMD ["nginx", "-g", "daemon off;"]