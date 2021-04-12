npm run build
docker stop sub-umi2-hash
docker rm sub-umi2-hash
docker build -t sub-umi2-hash .
docker run -p 2521:80 -d  --name sub-umi2-hash sub-umi2-hash