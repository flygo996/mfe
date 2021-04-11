npm run build
docker stop mfe-microapp-umi2-name
docker rm mfe-microapp-umi2-name
docker build -t mfe-microapp-umi2 .
docker run -p 2520:80 -d  --name mfe-microapp-umi2-name mfe-microapp-umi2