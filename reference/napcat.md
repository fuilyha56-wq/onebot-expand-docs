# NapCat 扩展 API 参考

NapCat 在 OneBot v11 标准之外提供了大量扩展 API。OneBot Expand 插件已适配 NapCat 的全部扩展 action。

## 扩展 API 索引

### 消息扩展

| action | 说明 | 插件文档 |
|---|---|---|
| `send_poke` | 群聊/私聊戳一戳 | [查看](../api/message/send-poke) |
| `send_forward_msg` | 发送合并转发 | [查看](../api/message/send-forward-msg) |
| `forward_friend_single_msg` | 转发单条信息到私聊 | [查看](../api/message/forward-friend-single-msg) |
| `forward_group_single_msg` | 转发单条信息到群聊 | [查看](../api/message/forward-group-single-msg) |
| `mark_private_msg_as_read` | 标记私聊信息已读 | [查看](../api/message/mark-private-msg-as-read) |
| `mark_group_msg_as_read` | 标记群聊信息已读 | [查看](../api/message/mark-group-msg-as-read) |
| `_mark_all_as_read` | 标记所有为已读 | [查看](../api/message/mark-all-as-read) |
| `get_friend_msg_history` | 获取私聊记录 | [查看](../api/message/get-friend-msg-history) |
| `set_msg_emoji_like` | 设置消息的表情回复 | [查看](../api/napcat-ext/set-msg-emoji-like) |

### 文件扩展

| action | 说明 | 插件文档 |
|---|---|---|
| `get_file` | 获取文件信息 | [查看](../api/file/get-file) |
| `send_online_file` | 发送在线文件 | [查看](../api/file/send-online-file) |
| `send_online_folder` | 发送在线文件夹 | [查看](../api/file/send-online-folder) |
| `get_online_file_msg` | 获取在线文件消息列表 | [查看](../api/file/get-online-file-msg) |
| `receive_online_file` | 接收在线文件 | [查看](../api/file/receive-online-file) |
| `refuse_online_file` | 拒绝在线文件 | [查看](../api/file/refuse-online-file) |
| `cancel_online_file` | 取消在线文件 | [查看](../api/file/cancel-online-file) |

### 账号扩展

| action | 说明 | 插件文档 |
|---|---|---|
| `get_group_detail_info` | 获取群详细信息 | [查看](../api/account/get-group-detail-info) |
| `get_robot_uin_range` | 获取机器人账号范围 | [查看](../api/account/get-robot-uin-range) |
| `get_friends_with_category` | 获取分类好友列表 | [查看](../api/user-ext/get-friends-with-category) |

### 状态扩展

| action | 说明 | 插件文档 |
|---|---|---|
| `set_online_status` | 设置在线状态 | [查看](../api/status/set-online-status) |
| `set_diy_online_status` | 设置 DIY 在线状态 | [查看](../api/status/set-diy-online-status) |
| `set_input_status` | 设置输入状态 | [查看](../api/status/set-input-status) |
| `nc_get_user_status` | 获取陌生人在线状态 | [查看](../api/status/nc-get-user-status) |

### 其他扩展

| action | 说明 | 插件文档 |
|---|---|---|
| `set_group_sign` | 群签到 | [查看](../api/group-ext/set-group-sign) |
| `friend_poke` | 私聊戳一戳 | [查看](../api/poke/friend-poke) |
| `group_poke` | 群聊戳一戳 | [查看](../api/poke/group-poke) |
| `get_group_shut_list` | 获取群聊被禁言用户 | [查看](../api/group-ext/get-group-shut-list) |
| `nc_get_packet_status` | 获取 PacketServer 状态 | [查看](../api/misc/nc-get-packet-status) |
| `nc_get_rkey` | 获取 Rkey（别名） | [查看](../api/cred/get-rkey) |
| `get_mini_app_ark` | 签名小程序卡片 | [查看](../api/misc/get-mini-app-ark) |
| `get_ai_record` | AI 文字转语音 | [查看](../api/ai-voice/get-ai-record) |
| `get_ai_characters` | 获取 AI 语音角色列表 | [查看](../api/ai-voice/get-ai-characters) |
| `send_group_ai_record` | 群聊发送 AI 语音 | [查看](../api/ai-voice/send-group-ai-record) |

## 上游文档

- [NapCat 官网](https://napneko.github.io/)
- [NapCat API 兼容情况](https://napneko.github.io/develop/api)
- [NapCat API 详细文档](https://napneko.github.io/develop/api/doc)
- [NapCat Apifox 文档](https://napcat.apifox.cn/)
