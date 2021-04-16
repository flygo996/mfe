docker stop main-mfe
docker rm main-mfe
docker build -t main-mfe .
docker run -p 2500:80 -d  --name main-mfe main-mfe