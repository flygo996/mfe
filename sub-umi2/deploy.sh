npm run build
docker stop mfe-microapp-umi2-history
docker rm mfe-microapp-umi2-history
docker build -t mfe-microapp-umi2 .
docker run -p 2521:80 -d  --name mfe-microapp-umi2-history mfe-microapp-umi2