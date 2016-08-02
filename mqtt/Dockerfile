FROM douglaszuqueto/alpine-nodejs:6.3.0

COPY . /app/broker

WORKDIR /app/broker

RUN npm -g install nodemon

CMD npm start

EXPOSE 1883