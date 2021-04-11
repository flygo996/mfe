npm run build
docker stop mfe-microapp-umi1-history
docker rm mfe-microapp-umi1-history
docker build -t mfe-microapp-umi1 .
docker run -p 2511:80 -d  --name mfe-microapp-umi1-history mfe-microapp-umi1