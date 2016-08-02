FROM douglaszuqueto/alpine-nodejs:6.3.0

COPY . /api

WORKDIR /api

RUN npm -g install nodemon

CMD npm start

EXPOSE 3000