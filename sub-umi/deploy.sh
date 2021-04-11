npm run build
docker stop mfe-microapp-umi1-hash
docker rm mfe-microapp-umi1-hash
docker build -t mfe-microapp-umi1 .
docker run -p 2510:80 -d  --name mfe-microapp-umi1-hash mfe-microapp-umi1