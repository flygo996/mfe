npm run build
docker stop mfe-microapp-umi2-hash
docker rm mfe-microapp-umi2-hash
docker build -t mfe-microapp-umi2 .
docker run -p 2520:80 -d  --name mfe-microapp-umi2-hash mfe-microapp-umi2