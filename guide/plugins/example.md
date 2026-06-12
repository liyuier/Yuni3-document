# 示例模块

## 插件源码

https://github.com/liyuier/Yuni3-plugin-repo/tree/master/example

## 插件功能

演示 Yuni3 插件系统的四种插件类型。

- **定时插件示例（OhaYo）**：每天早上向 bot master 发送问好消息
- **指令插件示例（HelloCommand）**：在群聊内发送 `/test`，bot 会响应 `Hello Command!`
- **规则插件示例（HelloPattern）**：在群聊内发送带有"你好"的消息，bot 会响应 `你好，我是 {bot 昵称} !`
- **即时插件示例（IAmBack）**：插件注册后立即执行一次，向特定群聊发送"我是后背"

## 插件资源/配置

### i_m_back.json

即时插件的目标群组配置文件。
