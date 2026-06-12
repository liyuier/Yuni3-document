# 插件介绍

## 插件基本信息介绍

### 分发形式

Yuni 的插件是以 jar 包 + 资源文件 的形式分发的。之所以把资源文件单独放出来而不是一起打包进 jar 包，是出于方便修改的考虑的

以 `帮助信息` 插件为例，将其被安放在 `plugins/help/` 目录下后，其中内容如下

```
help/
├── help-0.0.1-SNAPSHOT.jar  # jar 包
├── help-info.txt            # 帮助信息文本，执行插件时会实时解析该文件中的内容然后发送出去
└── metadata.json            # 插件元信息文件，这是开发者需要关注的文件，用户一般不用关心
```

### 内部内容

一个 jar 包其实可以包含多个功能文件。可以理解为 jar 包是 package, 其中可以存在多个 plugins. 这一点可以观察 `metadata.json` 验证。例如 `示例` 插件是我为 Yuni 开发者编写的示例模块，其元数据内容如下：

```json
## json 文件并不支持注释，这里的 # 仅用于本文档内的说明
{
  "module_id": "example",  ## jar 包代表的模块的 id
  "module_name": "示例模块",  ## 模块名称
  "plugins": [
    {
      "id": "schedule.OhaYo",  ## 单个插件的 id, 默认是插件入口文件的完整类名
      "name": "定时插件示例",  ## 单个插件的名称
      "version": "0.0.1",  ## 插件版本
      "description": "定时任务插件示例",  ## 插件一句话描述
      "tips": ["每天早上会向 bot master 问好。"],  ## 如何使用插件
      "author": "Yuier me@yuier.com",  ## 附属信息：插件作者
      "dependencies": [],  ## 附属信息：插件依赖
      "default_enable": true  ## 插件默认是否使能
    },
    {
      "id": "command.HelloCommand",
      "name": "指令插件示例",
      "version": "0.0.1",
      "description": "验证指令系统可用性",
      "tips": ["在群聊内发送“/test”，bot 会响应 “Hello Command!”"],
      "author": "Yuier me@yuier.com",
      "dependencies": [],
      "default_enable": true
    },
    ... 后略
  ]
}
```

## 获取插件

两种方法获取插件：本地构建 / 拉取 GitHub 上的 release 文件

### 本地构建

目前有一个插件独立仓库，位于 https://github.com/liyuier/Yuni3-plugin-repo . 可以把它拉下来自行构建。构建产物会在代码仓库的同级目录 `plugins` 下，即这样的形态

```
父目录
├── Yuni3-plugin-repo  # 代码仓库目录
└── plugins            # 构建产物目录
```

### 拉取 GitHub releases

到上述仓库的 releases 里边找就行 https://github.com/liyuier/Yuni3-plugin-repo/releases

一个插件对应一个 tag ，里边只有一个版本的构建产物。下载其中的 `<插件名>.zip` 下来，解压出来就行。

## 安装插件

### 初次部署应用

需要将插件压缩包解压到部署路径的 `plugins` 目录下，然后重启应用。应用会自动扫描加载插件

### 使用 plugin-manage 插件

https://github.com/liyuier/Yuni3-plugin-repo/releases/tag/plugin-manage

这是用于管理插件的插件，提供热重载功能。

安装该管理插件后，若要安装新插件，只需将插件压缩包解压放置，向任意机器人加入的群聊中发送指令 `/插件 重载` ，应用会全量重载 `plugins` 路径下所有插件。

当然，也支持 `/插件 重载 <插件ID>` 指定重载某个插件，用于更新插件。