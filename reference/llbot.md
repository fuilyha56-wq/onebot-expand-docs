# LLBot 扩展 API 参考

LLBot 在 OneBot v11 标准 API 之外提供群管理、相册、闪传、账号资料和系统能力扩展。OneBot Expand 已封装其中 **20 个** LLBot 扩展 action，并为历史命名差异保留别名。

## LLBot 扩展索引

| action | 说明 | 插件文档 |
|---|---|---|
| `batch_delete_group_member` | 批量踢出群成员 | [查看](../api/group-ext/batch-delete-group-member) |
| `set_group_msg_mask` | 设置群消息屏蔽 | [查看](../api/group-ext/set-group-msg-mask) |
| `create_group_album` | 创建群相册 | [查看](../api/group-album/create-group-album) |
| `delete_group_album` | 删除群相册 | [查看](../api/group-album/delete-group-album) |
| `get_flash_file_download_urls` | 获取闪传文件集下载地址 | [查看](../api/flash/get-flash-file-download-urls) |
| `upload_flash_file` | 上传闪传文件 | [查看](../api/flash/upload-flash-file) |
| `reshare_flash_file` | 重新分享闪传文件 | [查看](../api/flash/reshare-flash-file) |
| `set_group_file_forever` | 设置群文件永久保存 | [查看](../api/group-file/set-group-file-forever) |
| `get_profile_like_me` | 获取自身获赞列表 | [查看](../api/user-ext/get-profile-like-me) |
| `get_profile_like_count` | 获取获赞数量 | [查看](../api/user-ext/get-profile-like-count) |
| `get_qq_avatar` | 获取 QQ 头像 | [查看](../api/user-ext/get-qq-avatar) |
| `set_friend_category` | 设置好友分类 | [查看](../api/user-ext/set-friend-category) |
| `get_recommend_face` | 获取推荐表情 | [查看](../api/emoji-ext/get-recommend-face) |
| `unset_msg_emoji_like` | 取消消息表情回应 | [查看](../api/emoji-ext/unset-msg-emoji-like) |
| `get_config` | 获取协议端配置 | [查看](../api/misc/get-config) |
| `set_config` | 更新协议端配置 | [查看](../api/misc/set-config) |
| `get_event` | 获取事件信息 | [查看](../api/misc/get-event) |
| `llonebot_debug` | 获取 LLBot 调试信息 | [查看](../api/misc/llonebot-debug) |
| `scan_qrcode` | 扫描二维码 | [查看](../api/misc/scan-qrcode) |
| `get_guild_list` | 获取频道列表 | [查看](../api/misc/get-guild-list) |

## 历史别名

LLBot 的部分 action 名与插件主名不同。调用这些别名时，OneBot Expand 会通过 `resolve_action()` 自动解析到主名，配置开关与兼容性标记也随主名生效。

| LLBot action | 插件主名 | 插件文档 |
|---|---|---|
| `_delete_group_notice` | `_del_group_notice` | [查看](../api/group-notice/del-group-notice) |
| `download_flash_file` | `download_fileset` | [查看](../api/flash/download-fileset) |
| `get_flash_file_info` | `get_fileset_info` | [查看](../api/flash/get-fileset-info) |
| `get_group_album_list` | `get_qun_album_list` | [查看](../api/group-album/get-qun-album-list) |
| `send_group_sign` | `set_group_sign` | [查看](../api/group-ext/set-group-sign) |
| `upload_group_album` | `upload_image_to_qun_album` | [查看](../api/group-album/upload-image-to-qun-album) |
| `voice_msg_to_text` | `fetch_ptt_text` | [查看](../api/napcat-ext/fetch-ptt-text) |

::: warning 协议端差异
`api_defs.py` 当前的运行时兼容性标记以 NapCat 与 SnowLuma 为准；LLBot 支持范围由其上游 `ActionName` 枚举决定。调用 LLBot 专属能力前，应先在 LLBot 环境使用测试账号验证最小请求。
:::

## 上游来源

- [LLBot GitHub](https://github.com/LuckyLilliaBot/LLBot)
- 本地 action 总表：`E:\LLBot\src\onebot11\action\types.ts`
- 本地快速对照名单：`E:\LLBot\llbot_actions.txt`
