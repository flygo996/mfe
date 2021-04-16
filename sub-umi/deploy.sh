npm run build
docker stop sub-umi1-history
docker rm sub-umi1-history
docker build -t sub-umi1-history .
docker run -p 2510:80 -d  --name sub-umi1-history sub-umi1-history