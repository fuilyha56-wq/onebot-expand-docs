# 消息 API

本分类包含 20 个消息相关 API，涵盖群/私聊消息发送、转发、撤回、已读标记等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`send_group_msg`](./send-group-msg) | 发送群聊消息 | OB11 | ✓ | ✓ |
| [`send_private_msg`](./send-private-msg) | 发送私聊消息 | OB11 | ✓ | ✓ |
| [`send_msg`](./send-msg) | 发送消息（通用） | OB11 | ✓ | ✓ |
| [`delete_msg`](./delete-msg) | 撤回消息 | OB11 | ✓ | ✓ |
| [`get_msg`](./get-msg) | 获取消息 | OB11 | ✓ | ✓ |
| [`get_forward_msg`](./get-forward-msg) | 获取合并转发消息 | OB11 | ✓ | ✓ |
| [`send_like`](./send-like) | 发送好友赞 | OB11 | ✓ | ✓ |
| [`send_poke`](./send-poke) | 群聊/私聊戳一戳 | NapCat | ✓ | ✓ |
| [`send_forward_msg`](./send-forward-msg) | 发送合并转发 | NapCat | ✓ | ✓ |
| [`send_group_forward_msg`](./send-group-forward-msg) | 发送合并转发（群聊） | go-cqhttp | ✓ | ✓ |
| [`send_private_forward_msg`](./send-private-forward-msg) | 发送合并转发（好友） | go-cqhttp | ✓ | ✓ |
| [`get_group_msg_history`](./get-group-msg-history) | 获取群消息历史记录 | go-cqhttp | ✓ | ✓ |
| [`get_friend_msg_history`](./get-friend-msg-history) | 获取私聊历史记录 | go-cqhttp | ✓ | ✓ |
| [`forward_friend_single_msg`](./forward-friend-single-msg) | 转发单条消息到私聊 | Expand | ✓ | ✓ |
| [`forward_group_single_msg`](./forward-group-single-msg) | 转发单条消息到群聊 | Expand | ✓ | ✓ |
| [`mark_msg_as_read`](./mark-msg-as-read) | 标记消息已读 | go-cqhttp | ✓ | ✓ |
| [`mark_group_msg_as_read`](./mark-group-msg-as-read) | 标记群聊消息已读 | Expand | ✓ | ✓ |
| [`mark_private_msg_as_read`](./mark-private-msg-as-read) | 标记私聊消息已读 | Expand | ✓ | ✓ |
| [`_mark_all_as_read`](./mark-all-as-read) | 标记所有消息已读 | Expand | ✓ | ✓ |
| [`upload_forward_msg`](./upload-forward-msg) | 上传合并转发 | Expand | ✓ | ✓ |
