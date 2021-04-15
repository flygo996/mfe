npm run build
docker stop main-umi2-hash
docker rm main-umi2-hash
docker build -t main-umi2-hash .
docker run -p 2400:80 -d  --name main-umi2-hash main-umi2-hash