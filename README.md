## 支持
本项目view层支持 gulp ejs sass es6(不包含import export等模块) node层全面支持es6并使用commonjs规范

## 安装
* node version 8.9.1
* node版本管理工具 nvm
 
```

卸载全局安装的node和npm模块
npm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

sudo rm -rf /usr/local/lib/node_modules #删除全局 node_modules 目录
sudo rm /usr/local/bin/node #删除 node
cd  /usr/local/bin && ls -l | grep "../lib/node_modules/" | awk '{print $9}'| xargs rm #删除全局 node 模块注册的软链

安装nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

nvm使用
nvm ls-remote 所有可安装版本
nvm install stable #安装最新稳定版 node
nvm install 8.9.1 #安装 8.9.1 版本
nvm install 0.12.7 #安装 0.12.7 版本
nvm use 8.9.1 #切换至 8.9.1 版本
nvm alias default 8.9.1 #设置默认 node 版本为 8.9.1
nvm current #查看当前版本

安装cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

安装npm-check-updates
npm install -g npm-check-updates
ncu
ncu -a

安装gulp
npm i -g gulp

安装nodemon
npm i -g nodemon

安装pm2
cnpm i -g pm2

生成express应用
* npm install express-generator -g 安装生成器
* express -h 帮助
* express -e myapp   生成使用ejs引擎的app
* npm install

```


## 开发环境使用

```
 gulp serve //开发环境 gulp启动1203端口监测3013端口
 gulp build //打包时 gulpfile 中 dev=false
 静态资源根目录 /dist 引用 <img src="/dist/images/ci_loca.png"/>  <script src="/dist/scripts/vendor/jquery.cookie.js"></script>
 
```

## 测试环境使用

```
 npm run test-start    测试环境启动服务
 npm run test-stop     测试环境停止服务
 npm run test-restart  测试环境重启服务
 npm run test-reload   测试环境重载服务
 
```

## 正式环境使用

```
 npm run pro-start    正式环境启动服务
 npm run pro-stop     正式环境停止服务
 npm run pro-restart  正式环境重启服务
 npm run pro-reload   正式环境重载服务
 
```

## pm2命令

```
1. 启动
# pm2 start app.js
# pm2 start app.js --name my-api   #my-api为PM2进程名称
# pm2 start app.js -i 0           #根据CPU核数启动进程个数
# pm2 start app.js --watch   #实时监控app.js的方式启动，当app.js文件有变动时，pm2会自动reload
2. 查看进程
# pm2 list
# pm2 show 0 或者 # pm2 info 0  #查看进程详细信息，0为PM2进程id
3. 监控
# pm2 monit
4. 停止
# pm2 stop all  #停止PM2列表中所有的进程
# pm2 stop 0    #停止PM2列表中进程为0的进程
5. 重载
# pm2 reload all    #重载PM2列表中所有的进程
# pm2 reload 0     #重载PM2列表中进程为0的进程
6. 重启
# pm2 restart all     #重启PM2列表中所有的进程
# pm2 restart 0      #重启PM2列表中进程为0的进程
7. 删除PM2进程
# pm2 delete 0     #删除PM2列表中进程为0的进程
# pm2 delete all   #删除PM2列表中所有的进程
8. 日志操作
# pm2 logs [--raw]   #Display all processes logs in streaming
# pm2 flush              #Empty all log file
# pm2 reloadLogs    #Reload all logs
9. 升级PM2
# npm install pm2@lastest -g   #安装最新的PM2版本
# pm2 updatePM2                    #升级pm2
10. 更多命令参数请查看帮助
# pm2 --help

```