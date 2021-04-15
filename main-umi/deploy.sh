npm run build
docker stop main-umi1-hash
docker rm main-umi1-hash
docker build -t main-umi1-hash .
docker run -p 2300:80 -d  --name main-umi1-hash main-umi1-hash