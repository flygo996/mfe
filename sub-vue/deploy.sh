npm run build
docker stop mfe-microapp-vue1-name
docker rm mfe-microapp-vue1-name
docker build -t mfe-microapp-vue1 .
docker run -p 2530:80 -d  --name mfe-microapp-vue1-name mfe-microapp-vue1