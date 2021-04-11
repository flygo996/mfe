npm run build
docker stop mfe-microapp-umi1-name
docker rm mfe-microapp-umi1-name
docker build -t mfe-microapp-umi1 .
docker run -p 2510:80 -d  --name mfe-microapp-umi1-name mfe-microapp-umi1