
FROM node:20-alpine AS builder

WORKDIR /kaur_kiranjot_ui_garden

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /kaur_kiranjot_ui_garden/storybook-static /usr/share/nginx/html

EXPOSE 8018

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget --quiet --tries=1 --spider http://localhost:8083/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
