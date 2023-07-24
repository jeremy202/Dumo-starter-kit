FROM node:16-slim
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

ENV NODE_ENV=production
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80
ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80

CMD [ "npm", "start" ]
