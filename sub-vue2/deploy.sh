npm run build
docker stop mfe-microapp-vue2-hash
docker rm mfe-microapp-vue2-hash
docker build -t mfe-microapp-vue2 .
docker run -p 2540:80 -d  --name mfe-microapp-vue2-hash mfe-microapp-vue2