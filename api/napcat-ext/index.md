# NapCat 扩展 API

本分类包含 15 个 NapCat 扩展 API，涵盖 Cookies、CSRF、状态、精华消息等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`set_msg_emoji_like`](./set-msg-emoji-like) | 设置消息表情回复 | NapCat | ✓ | ✓ |
| [`get_essence_msg_list`](./get-essence-msg-list) | 获取精华消息列表 | go-cqhttp | ✓ | ✓ |
| [`get_online_clients`](./get-online-clients) | 获取在线客户端列表 | NapCat | ✓ | ✓ |
| [`get_cookies`](./get-cookies) | 获取 Cookies | NapCat | ✓ | ✓ |
| [`get_csrf_token`](./get-csrf-token) | 获取 CSRF Token | NapCat | ✓ | ✓ |
| [`get_status`](./get-status) | 获取运行状态 | NapCat | ✓ | ✓ |
| [`set_restart`](./set-restart) | 重启协议端 | NapCat | ✓ | ✓ |
| [`clean_cache`](./clean-cache) | 清理缓存 | NapCat | ✓ | ✓ |
| [`can_send_image`](./can-send-image) | 检查是否可以发送图片 | NapCat | ✓ | ✓ |
| [`can_send_record`](./can-send-record) | 检查是否可以发送语音 | NapCat | ✓ | ✓ |
| [`get_version_info`](./get-version-info) | 获取版本信息 | NapCat | ✓ | ✓ |
| [`set_essence_msg`](./set-essence-msg) | 设置精华消息 | go-cqhttp | ✓ | ✓ |
| [`delete_essence_msg`](./delete-essence-msg) | 移出精华消息 | go-cqhttp | ✓ | ✓ |
| [`get_group_at_all_remain`](./get-group-at-all-remain) | 获取群@全体剩余次数 | go-cqhttp | ✓ | ✓ |
| [`fetch_ptt_text`](./fetch-ptt-text) | 获取语音转文字 | Expand | ✓ | ✓ |
