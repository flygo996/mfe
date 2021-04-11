npm run build
docker stop mfe-microapp-vue2-name
docker rm mfe-microapp-vue2-name
docker build -t mfe-microapp-vue2 .
docker run -p 2540:80 -d  --name mfe-microapp-vue2-name mfe-microapp-vue2