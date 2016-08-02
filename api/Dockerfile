FROM douglaszuqueto/alpine-nodejs:6.3.0

COPY . /app/api

WORKDIR /app/api

RUN npm -g install nodemon

CMD npm start

EXPOSE 3000