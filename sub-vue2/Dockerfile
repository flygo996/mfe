FROM nginx:latest
LABEL author=laifp
VOLUME /tmp 
ENV LANG C.UTF-8
WORKDIR /home
RUN mkdir dist
COPY dist /home/dist
COPY nginx.conf /home/nginx.conf
COPY mime.types /home/mime.types
RUN nginx -t -c /home/nginx.conf
ENTRYPOINT ["nginx", "-c", "/home/nginx.conf", "-g", "daemon off;"]