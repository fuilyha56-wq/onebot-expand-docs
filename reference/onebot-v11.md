# OneBot v11 标准 API 参考

OneBot v11 标准定义了 26 个公开 API 和若干隐藏 API。OneBot Expand 插件已全部适配。

## 公开 API

### 消息相关

| action | 说明 | 插件文档 |
|---|---|---|
| `send_private_msg` | 发送私聊消息 | [查看](../api/message/send-private-msg) |
| `send_group_msg` | 发送群消息 | [查看](../api/message/send-group-msg) |
| `send_msg` | 发送消息 | [查看](../api/message/send-msg) |
| `delete_msg` | 撤回消息 | [查看](../api/message/delete-msg) |
| `get_msg` | 获取消息 | [查看](../api/message/get-msg) |
| `get_forward_msg` | 获取合并转发消息 | [查看](../api/message/get-forward-msg) |
| `send_like` | 发送好友赞 | [查看](../api/message/send-like) |

### 群操作

| action | 说明 | 插件文档 |
|---|---|---|
| `set_group_kick` | 群组踢人 | [查看](../api/group/set-group-kick) |
| `set_group_ban` | 群组单人禁言 | [查看](../api/group/set-group-ban) |
| `set_group_anonymous_ban` | 群组匿名用户禁言 | [查看](../api/group/set-group-anonymous-ban) |
| `set_group_whole_ban` | 群组全员禁言 | [查看](../api/group/set-group-whole-ban) |
| `set_group_admin` | 群组设置管理员 | [查看](../api/group/set-group-admin) |
| `set_group_anonymous` | 群组匿名 | [查看](../api/group/set-group-anonymous) |
| `set_group_card` | 设置群名片 | [查看](../api/group/set-group-card) |
| `set_group_name` | 设置群名 | [查看](../api/group/set-group-name) |
| `set_group_leave` | 退出群组 | [查看](../api/group/set-group-leave) |
| `set_group_special_title` | 设置群组专属头衔 | [查看](../api/group/set-group-special-title) |

### 请求处理

| action | 说明 | 插件文档 |
|---|---|---|
| `set_friend_add_request` | 处理加好友请求 | [查看](../api/request/set-friend-add-request) |
| `set_group_add_request` | 处理加群请求 | [查看](../api/request/set-group-add-request) |

### 账号信息

| action | 说明 | 插件文档 |
|---|---|---|
| `get_login_info` | 获取登录号信息 | [查看](../api/account/get-login-info) |
| `get_stranger_info` | 获取陌生人信息 | [查看](../api/account/get-stranger-info) |
| `get_friend_list` | 获取好友列表 | [查看](../api/account/get-friend-list) |
| `get_group_info` | 获取群信息 | [查看](../api/account/get-group-info) |
| `get_group_list` | 获取群列表 | [查看](../api/account/get-group-list) |
| `get_group_member_info` | 获取群成员信息 | [查看](../api/account/get-group-member-info) |
| `get_group_member_list` | 获取群成员列表 | [查看](../api/account/get-group-member-list) |
| `get_group_honor_info` | 获取群荣誉信息 | [查看](../api/account/get-group-honor-info) |

### 凭证与能力

| action | 说明 | 插件文档 |
|---|---|---|
| `get_cookies` | 获取 Cookies | [查看](../api/napcat-ext/get-cookies) |
| `get_csrf_token` | 获取 CSRF Token | [查看](../api/napcat-ext/get-csrf-token) |
| `get_credentials` | 获取 QQ 相关接口凭证 | [查看](../api/cred/get-credentials) |
| `get_record` | 获取语音 | [查看](../api/file/get-record) |
| `get_image` | 获取图片 | [查看](../api/file/get-image) |
| `can_send_image` | 检查是否可以发送图片 | [查看](../api/napcat-ext/can-send-image) |
| `can_send_record` | 检查是否可以发送语音 | [查看](../api/napcat-ext/can-send-record) |
| `get_status` | 获取运行状态 | [查看](../api/napcat-ext/get-status) |
| `get_version_info` | 获取版本信息 | [查看](../api/napcat-ext/get-version-info) |
| `set_restart` | 重启 OneBot 实现 | [查看](../api/napcat-ext/set-restart) |
| `clean_cache` | 清理缓存 | [查看](../api/napcat-ext/clean-cache) |

## 上游文档

- [OneBot v11 标准](https://github.com/botuniverse/onebot-11)
- [公开 API 文档](https://github.com/botuniverse/onebot-11/blob/master/api/public.md)
- [隐藏 API 文档](https://github.com/botuniverse/onebot-11/blob/master/api/hidden.md)
