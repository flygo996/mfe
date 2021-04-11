npm run build
docker stop mfe-microapp-vue1-history
docker rm mfe-microapp-vue1-history
docker build -t mfe-microapp-vue1 .
docker run -p 2531:80 -d  --name mfe-microapp-vue1-history mfe-microapp-vue1