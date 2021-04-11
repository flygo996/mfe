npm run build
docker stop mfe-microapp-vue2-history
docker rm mfe-microapp-vue2-history
docker build -t mfe-microapp-vue2 .
docker run -p 2541:80 -d  --name mfe-microapp-vue2-history mfe-microapp-vue2