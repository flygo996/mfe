FROM nginx:latest
LABEL author=laifp
VOLUME /tmp 
ENV LANG C.UTF-8
WORKDIR /home
COPY nginx.conf /home/nginx.conf
RUN nginx -t -c /home/nginx.conf
ENTRYPOINT ["nginx", "-c", "/home/nginx.conf", "-g", "daemon off;"]