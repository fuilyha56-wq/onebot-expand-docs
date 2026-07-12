# SnowLuma 扩展 API 参考

SnowLuma 是基于 TypeScript 的协议转换框架，为 QQ 客户端提供 OneBot v11 标准接口。OneBot Expand 插件已适配 SnowLuma 的全部扩展 action。

## SnowLuma 独有 API

以下 API 是 SnowLuma 独有或主名由 SnowLuma 定义的：

| action | 说明 | 插件文档 |
|---|---|---|
| `request_decrypt_key` | 请求数据库解密密钥 | [查看](../api/cred/request-decrypt-key) |
| `set_qzone_ban` | 拉黑/解除拉黑（QQ空间黑名单） | [查看](../api/qzone/set-qzone-ban) |
| `set_qzone_msg_right` | 修改说说查看权限 | [查看](../api/qzone/set-qzone-msg-right) |
| `upload_forward_msg` | 上传合并转发消息 | [查看](../api/message/upload-forward-msg) |
| `rename_group_file_folder` | 重命名群文件夹 | [查看](../api/group-file/rename-group-file-folder) |
| `list_filesets` | 列出所有闪传文件集 | [查看](../api/flash/list-filesets) |
| `delete_flash_file` | 删除闪传文件 | [查看](../api/flash/delete-flash-file) |
| `rename_flash_file` | 重命名闪传文件 | [查看](../api/flash/rename-flash-file) |
| `modify_custom_face` | 修改收藏表情备注 | [查看](../api/emoji-ext/modify-custom-face) |
| `move_custom_face_to_front` | 收藏表情移到最前 | [查看](../api/emoji-ext/move-custom-face-to-front) |
| `set_group_reaction` | 群聊消息表情回应 | [查看](../api/emoji-ext/set-group-reaction) |
| `share_peer` | 分享用户/群Ark卡片 | [查看](../api/ark/share-peer) |
| `share_group_ex` | 分享群Ark卡片 | [查看](../api/ark/share-group-ex) |

## SnowLuma 兼容性

SnowLuma 几乎实现了所有 NapCat 扩展 API。以下 API 在 SnowLuma 中**不支持**（NapCat 专属）：

| action | 说明 | 原因 |
|---|---|---|
| `send_online_file` | 发送在线文件 | NapCat 专属 |
| `send_online_folder` | 发送在线文件夹 | NapCat 专属 |
| `get_online_file_msg` | 获取在线文件消息列表 | NapCat 专属 |
| `receive_online_file` | 接收在线文件 | NapCat 专属 |
| `refuse_online_file` | 拒绝在线文件 | NapCat 专属 |
| `cancel_online_file` | 取消在线文件 | NapCat 专属 |
| `get_robot_uin_range` | 获取机器人账号范围 | NapCat 专属 |
| `fetch_custom_face_detail` | 获取收藏表情详情 | NapCat 专属 |
| `set_custom_face_desc` | 修改收藏表情描述 | NapCat 专属 |
| `get_word_slices` | go-cqhttp 分词 | SnowLuma 未实现 |

## 上游文档

- [SnowLuma 官网](https://snowluma.github.io/)
- [SnowLuma GitHub](https://github.com/SnowLuma/SnowLuma)
- [快速开始](https://snowluma.github.io/guide/quickstart.html)
