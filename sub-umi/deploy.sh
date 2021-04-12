npm run build
docker stop sub-umi1-hash
docker rm sub-umi1-hash
docker build -t sub-umi1-hash .
docker run -p 2511:80 -d  --name sub-umi1-hash sub-umi1-hash
