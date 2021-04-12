npm run build
docker stop mfe-mainapp-umi1-name
docker rm mfe-mainapp-umi1-name
docker build -t mfe-mainapp-umi1 .
docker run -p 2300:80 -d  --name mfe-mainapp-umi1-name mfe-mainapp-umi1