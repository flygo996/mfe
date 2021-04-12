npm run build
docker stop sub-vue2-hash
docker rm sub-vue2-hash
docker build -t sub-vue2-hash .
docker run -p 2540:80 -d  --name sub-vue2-hash sub-vue2-hash
