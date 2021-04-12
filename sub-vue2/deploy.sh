npm run build
docker stop sub-vue2-history
docker rm sub-vue2-history
docker build -t sub-vue2-history .
docker run -p 2540:80 -d  --name sub-vue2-history sub-vue2-history
