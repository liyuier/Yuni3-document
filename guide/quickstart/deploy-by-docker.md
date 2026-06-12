# Docker 部署

## 环境要求

| 软件 | 用途 |
|------|------|
| Docker | 构建镜像、运行容器 |
| Git | 拉取代码（如果直接拉取镜像则不需要） |
| NapCat| 提供 OneBot 前端 |

## 获取镜像

### 方案一：本地构建镜像

```bash
git clone https://github.com/liyuier/Yuni3.git
cd Yuni3
docker build -t yuni3:latest .
```

构建产物是本地镜像 `yuni3:latest`

### 方案二：拉取镜像

镜像在 dockerhub 和 ghcr 上都有保存

```bash
# 拉取 dockerhub 镜像
docker pull yuier/yuni3:latest
# 拉取 ghcr 镜像
docker pull ghcr.io/liyuier/yuni3:latest
```

## 准备部署目录

同 [源码部署-准备部署目录](https://yuni.yuier.com/guide/quickstart/deploy-by-sourcecode.html#%E5%87%86%E5%A4%87%E9%83%A8%E7%BD%B2%E7%9B%AE%E5%BD%95)

## 启动 docker

```bash
docker run -d \
  --name yuni3 --restart always \
  -p 11451:11451 -p 11452:11452 \
  -v /srv/docker/yuni/config:/app/config:ro \
  -v /srv/docker/yuni/data:/app/data \
  -v /srv/docker/yuni/logs:/app/logs \
  -v /srv/docker/yuni/plugins:/app/plugins \
  yuni3:latest
```

| 参数 | 说明 |
|------|------|
| `-d` | 后台运行 |
| `--restart always` | 进程崩溃或 VPS 重启后自动恢复 |
| `-p 11451:11451` | 应用端口 |
| `-p 11452:11452` | 容器内 Redis 端口 |
| `-v ...:/app/config:ro` | 配置文件只读挂载 |
| `-v ...:/app/data` | SQLite 数据库持久化 |
| `-v ...:/app/logs` | 日志持久化 |
| `-v ...:/app/plugins` | 插件目录 |

使用 `docker logs -f yuni3` 实时查看容器内日志

看到控制台输出 `Yuni 启动完毕` 就说明 OK 了。

此时启动的只是一个本体，只能接收前台传来的消息，没有任何功能。需要在后续章节安装插件才能体验各种功能。