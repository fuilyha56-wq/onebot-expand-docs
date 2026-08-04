# Service 层

OneBot Expand 插件提供 **23 个 Service 组件**，按功能域聚合，供其他插件程序化调用。Service 层**始终可用**（不受 Tool 总开关和独立开关影响）。

## Service 列表

| Service | 功能域 | 方法数 | 说明 | 文档 |
|---|---|---|---|---|
| MessageService | message | 19 | 消息发送/撤回/已读/转发 | [查看](./message-service) |
| GroupService | group | 13 | 群禁言/踢出/管理/头衔/匿名/成员权限 | [查看](./group-service) |
| FileService | file | 16 | 群私聊文件上传、图片/语音获取、流式文件 | [查看](./file-service) |
| AccountService | account | 10 | 登录号/好友/群列表与详情 | [查看](./account-service) |
| NapcatExtService | napcat_ext | 15 | NapCat 状态/Cookies/CSRF/精华/版本 | [查看](./napcat-ext-service) |
| EmojiService | emoji | 6 | QQNT 表情表查询 | [查看](./emoji-service) |
| PathMapperService | path_mapper | 5 | 文件路径映射 | [查看](./pathmapper-service) |
| GroupFileService | group_file | 13 | 群文件 CRUD/文件夹/转存/重命名 | [查看](./group-file-service) |
| GroupNoticeService | group_notice | 3 | 群公告 | [查看](./group-notice-service) |
| GroupExtService | group_ext | 14 | 群头像/备注/加群选项/签到/打卡 | [查看](./group-ext-service) |
| RequestService | request | 5 | 好友/加群请求处理 | [查看](./request-service) |
| UserExtService | user_ext | 15 | 好友备注/分类/单向好友/资料/头像/个性装扮 | [查看](./user-ext-service) |
| StatusService | status | 4 | 在线状态/DIY状态/输入状态 | [查看](./status-service) |
| PokeService | poke | 2 | 戳一拍 | [查看](./poke-service) |
| EmojiExtService | emoji_ext | 12 | 收藏表情CRUD/详情/备注/移动/回应 | [查看](./emoji-ext-service) |
| AiVoiceService | ai_voice | 3 | AI角色/语音生成 | [查看](./ai-voice-service) |
| CredService | cred | 8 | clientkey/credentials/rkey/URL安全/OCR/下载/解密 | [查看](./cred-service) |
| MiscService | misc | 19 | 机型/退出/包状态/内联键盘/小程序/翻译/收藏/SSO/Protobuf/快速操作/分词 | [查看](./misc-service) |
| FlashService | flash | 14 | 闪传任务/消息/文件列表/URL/分享/下载/文件集CRUD | [查看](./flash-service) |
| GroupAlbumService | group_album | 9 | 群相册列表/上传/评论/点赞/删除 | [查看](./group-album-service) |
| GroupTodoService | group_todo | 3 | 群待办设置/完成/取消 | [查看](./group-todo-service) |
| QzoneService | qzone | 9 | 说说列表/动态/发表/删除/点赞/评论/拉黑/权限 | [查看](./qzone-service) |
| ArkService | ark | 4 | 用户/群Ark卡片分享 | [查看](./ark-service) |

## 使用方式

Service 层通过插件管理器获取，调用示例：

```python
from onebot_expand.services import MessageService

# 获取 Service 实例（每次创建新实例，不应缓存）
service = MessageService(plugin)

# 调用方法（始终可用，不受 Tool 开关影响）
result = await service.send_group_msg(
    group_id=123456789,
    message=[{"type": "text", "data": {"text": "你好"}}],
)
```

## 设计说明

- **始终可用**：Service 不受 `enable_all_tools` 总开关和 `enable_<action>` 独立开关影响，确保其他插件通过 Service 调用的路径不会中断
- **非单例**：每次 `get_service()` 都创建新实例，不应依赖实例级缓存
- **统一入口**：所有 Service 继承 `BaseService`，通过 `self.plugin.config` 访问配置
- **功能域聚合**：一类功能聚合为一个 Service，不按 action 数量切分

## 调用方式

其他插件通过 Service 调用 API 的示例：

```python
from onebot_expand.services import MessageService

# 获取 MessageService 实例
msg_service = MessageService()

# 发送群聊消息
await msg_service.send_group_msg(
    group_id=123456789,
    message=[{"type": "text", "data": {"text": "Hello!"}}],
)
```

::: tip Service 不受总开关影响
即使 `enable_all_tools = false`，Service 方法仍然可用。这确保了其他插件通过 Service 调用的路径不会中断。
:::

## 下一步

- [API 文档](../api/) — 浏览全部 211 个主名 API
- [架构设计](../guide/architecture) — 了解 Tool/Service 双层设计
