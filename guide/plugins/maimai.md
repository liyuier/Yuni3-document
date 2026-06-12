# 麦麦适配器

## 插件源码

https://github.com/liyuier/Yuni3-plugin-repo/tree/master/maimai

## 插件功能

启动 WebSocket 服务器，接受 MaiBot-Napcat-Adapter 连接，实现 OneBot 协议核心动作的双向中转（NapCat ←→ Yuni ←→ maimai）。

- **maimai-连接器**：启动 WebSocket 服务器，实现 OneBot 协议的 API 请求代理
- **maimai-消息转发**：将 QQ 群聊/私聊消息（非命令消息）转发给 maimai，使麦麦专注于群聊自然对话

## 插件资源/配置

### maimai_config.json

麦麦适配器连接配置文件，包含 WebSocket 服务器端口和认证 token。
