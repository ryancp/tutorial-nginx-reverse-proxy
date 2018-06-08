FROM nginx:1.15.0

RUN apt-get update -q
RUN apt-get upgrade -y -q

# Install dependencies
RUN apt-get install -y vim net-tools iputils-ping curl

COPY ./vhost_app.conf /etc/nginx/conf.d/
COPY ./vhost_api.conf /etc/nginx/conf.d/

RUN rm /etc/nginx/conf.d/default.conf

# Clean up after install
RUN apt-get clean && \
  rm -rf /var/lib/apt/lists/*

EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]