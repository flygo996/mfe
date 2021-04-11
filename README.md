## 创建 umi 项目

mkdir my-app && cd my-app
npx @umijs/create-umi-app
或者 yarn create @umijs/umi-app (本机报错，所以不用 yarn)

## 创建 vue 项目

npm i -g @vue/cli
vue create my-app

## 安装依赖包

npm i -g yarn tyarn
cd my-app
tyarn

## 启动项目

1、启动服务器
npm run server

2、启动各个项目
npm run start

3、docker + nginx 部署各个项目
npm run deploy
