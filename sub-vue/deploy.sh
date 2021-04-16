npm run build
docker stop sub-vue1-history
docker rm sub-vue1-history
docker build -t sub-vue1-history .
docker run -p 2531:80 -d  --name sub-vue1-history sub-vue1-history