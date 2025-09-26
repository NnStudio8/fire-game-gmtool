# fire-game-gmtool

这是为「向僵尸开炮」服务端搭建的GM管理工具，目的是为自建服务端的玩家提供统一的界面管理。

基于 Vite + Vue3 构建，使用 pinia + Element Plus 等组件。

## 构建步骤

```sh
# 环境：node22 + yarn

yarn install
yarn build
```

## 使用方法

- 按照[教程](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/搭建教程.txt)搭建并且运行游戏服务端。
- 编译结果 **dist** 重命名为 **gm2025**，把 **gm2025** 放置在游戏服务端 **/data/web-t5game2.scgame.com.cn/** 目录下。
- 打开网页 http://[服务器IP]:81/gm2025

### /data/web-t5game2.scgame.com.cn/ 截图

![目录截图1](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/目录截图1.png)

### /data/web-t5game2.scgame.com.cn/gm2025/ 截图

![目录截图2](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/目录截图2.png)

## 项目截图

### 充值

![充值截图](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/充值.png)

### 注册

![注册截图](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/注册.png)

### 发送物品

![发送物品截图](https://github.com/NnStudio8/fire-game-gmtool/blob/main/README/发送物品.png)

## License

[MIT](https://github.com/NnStudio8/fire-game-gmtool/blob/main/LICENSE)
