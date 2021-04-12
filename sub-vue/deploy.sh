npm run build
docker stop sub-vue1-hash
docker rm sub-vue1-hash
docker build -t sub-vue1-hash .
docker run -p 2530:80 -d  --name sub-vue1-hash sub-vue1-hash
