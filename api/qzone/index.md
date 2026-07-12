# QQ 空间 API

本分类包含 9 个 QQ 空间 API，涵盖说说列表/动态/发表/删除/点赞/评论/拉黑/权限等功能。

::: warning 兼容性说明
QQ 空间相关 API 在 NapCat 端暂未实现，仅 SnowLuma 支持。调用时请确保协议端为 SnowLuma。
:::

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`get_qzone_msg_list`](./get-qzone-msg-list) | 获取说说列表 | Expand | ✗ | ✓ |
| [`get_qzone_feeds`](./get-qzone-feeds) | 获取空间动态 | Expand | ✗ | ✓ |
| [`send_qzone_msg`](./send-qzone-msg) | 发表说说 | Expand | ✗ | ✓ |
| [`delete_qzone_msg`](./delete-qzone-msg) | 删除说说 | Expand | ✗ | ✓ |
| [`like_qzone`](./like-qzone) | 点赞说说 | Expand | ✗ | ✓ |
| [`unlike_qzone`](./unlike-qzone) | 取消点赞 | Expand | ✗ | ✓ |
| [`comment_qzone`](./comment-qzone) | 评论说说 | Expand | ✗ | ✓ |
| [`set_qzone_ban`](./set-qzone-ban) | 空间封禁 | Expand | ✗ | ✓ |
| [`set_qzone_msg_right`](./set-qzone-msg-right) | 空间权限 | Expand | ✗ | ✓ |
