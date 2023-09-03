# 开发记录

## 一.项目搭建

### 1.基本环境
~~~js
//安装Koa @koa/router koa-bodyparser
npm install Koa @koa/router koa-bodyparser

//安装dotenv
npm install dotenv
~~~
### jsonwebtoken使用
~~~js
//安装jsonwebtoken
npm install jsonwebtoken

//打开git bash windows自带的cmd没有openssl命令
->openssl
->genrsa -out private.key 1024
->rsa -in private.key -pubout -out public.key
~~
