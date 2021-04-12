npm run build
docker stop sub-umi2-history
docker rm sub-umi2-history
docker build -t sub-umi2-history .
docker run -p 2520:80 -d  --name sub-umi2-history sub-umi2-history
