npm run build
docker stop main-umi2-plugin
docker rm main-umi2-plugin
docker build -t main-umi2-plugin .
docker run -p 2400:80 -d  --name main-umi2-plugin main-umi2-plugin