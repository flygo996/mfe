npm run build
docker stop mfe-mainapp-umi2-name
docker rm mfe-mainapp-umi2-name
docker build -t mfe-mainapp-umi2 .
docker run -p 2400:80 -d  --name mfe-mainapp-umi2-name mfe-mainapp-umi2