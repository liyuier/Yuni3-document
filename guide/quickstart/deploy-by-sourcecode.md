# 源码部署

## 环境要求

| 软件 | 版本要求 | 用途 |
|------|---------|------|
| JDK | 21 | 编译和运行 |
| Maven | 3.9+ | 构建项目 |
| Git | 任意 | 拉取代码 |
| Redis | 7.x | 缓存服务，监听本机 6379 |
| NapCat|  无  | 提供 OneBot 前端 |

（相信能找到这篇文档的朋友搞定这些环境都不在话下，更何况现在有无敌的 AI 大人）

## 拉取代码

```bash
git clone https://github.com/liyuier/Yuni3.git
cd Yuni3
```

## 本地构建

在项目根目录下执行

```bash
mvn package -pl yuni-application -am -DskipTests
```

构建产物位于 `yuni-application/target/yuni-app.jar`

## 准备部署目录

假设位于 `/folder` 目录

在目录下分别创建 `config`, `data`, `logs`, `plugins` 四个子目录

将代码仓的 `yuni-application/src/main/resources/example.yml` 文件复制到 `config` 目录下，然后改名为 `application-prod.yml`

`example.yml` 里注释挺详细的，照着改就行。实在有问题到仓库里发 issue

把前一小节构建出来的 `yuni-app.jar` 复制到 `/folder` 目录下

此时的目录结构应该是这样的

```
folder/
├── yuni-app.jar
├── config/
│   └── application-prod.yml
├── data/
│   └── yuni3.db         （首次启动后自动生成）
├── logs/
└── plugins/
```

## 启动

这里建议用个 [screen](https://www.runoob.com/linux/linux-comm-screen.html) 开个窗口执行

```bash
java -jar yuni-app.jar \
  --spring.profiles.active=prod \
  --spring.config.location=./config/application-prod.yml
```

看到控制台输出 `Yuni 启动完毕` 就说明 OK 了。

此时启动的只是一个本体，只能接收前台传来的消息，没有任何功能。需要在后续章节安装插件才能体验各种功能。