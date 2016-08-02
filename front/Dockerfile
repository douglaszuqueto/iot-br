FROM nginx:alpine

ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf

ADD ./nginx/nginx.conf /etc/nginx/nginx.conf

COPY . /front

WORKDIR /front

EXPOSE 80