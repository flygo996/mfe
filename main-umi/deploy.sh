npm run build
docker stop main-umi1-qiankun
docker rm main-umi1-qiankun
docker build -t main-umi1-qiankun .
docker run -p 2300:80 -d  --name main-umi1-qiankun main-umi1-qiankun