#!/usr/bin/env sh

# 发生错误时终止
#set -e

# 构建
npm run clean
npm run build

# 进入构建文件夹
cd public

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git config user.name "maliut"
git config user.email "lqn619@163.com"
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:maliut/deploy-florastudio.git master:master

cd -
