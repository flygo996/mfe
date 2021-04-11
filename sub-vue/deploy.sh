npm run build
docker stop mfe-microapp-vue1-hash
docker rm mfe-microapp-vue1-hash
docker build -t mfe-microapp-vue1 .
docker run -p 2530:80 -d  --name mfe-microapp-vue1-hash mfe-microapp-vue1