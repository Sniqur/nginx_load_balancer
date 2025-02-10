FROM node:14

WORKDIR /app

COPY server.js .
COPY *.html .
COPY images ./images
COPY css ./css
COPY js ./js
COPY public ./public
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
