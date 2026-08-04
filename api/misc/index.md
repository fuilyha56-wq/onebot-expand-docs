# 机型/其他 API

本分类包含 19 个机型/其他 API，涵盖机型/退出/包状态/内联键盘/小程序/翻译/收藏/SSO包/快速操作/分词/配置/事件/调试/扫码/频道/发包等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`_get_model_show`](./get-model-show) | 获取在线机型 | Expand | ✓ | ✓ |
| [`_set_model_show`](./set-model-show) | 设置在线机型 | Expand | ✓ | ✓ |
| [`bot_exit`](./bot-exit) | 退出机器人 | Expand | ✓ | ✓ |
| [`nc_get_packet_status`](./nc-get-packet-status) | 获取 PacketServer 状态 | Expand | ✓ | ✓ |
| [`click_inline_keyboard_button`](./click-inline-keyboard-button) | 点击内联键盘按钮 | Expand | ✓ | ✓ |
| [`get_mini_app_ark`](./get-mini-app-ark) | 签名小程序卡片 | Expand | ✓ | ✓ |
| [`translate_en2zh`](./translate-en2zh) | 英译中翻译 | Expand | ✓ | ✓ |
| [`create_collection`](./create-collection) | 创建文本收藏 | Expand | ✓ | ✓ |
| [`get_collection_list`](./get-collection-list) | 获取收藏列表 | Expand | ✓ | ✓ |
| [`send_packet`](./send-packet) | 发送 Packet | Expand | ✓ | ✗ |
| [`handle_quick_operation`](./handle-quick-operation) | 快速操作 | go-cqhttp | ✓ | ✗ |
| [`get_word_slices`](./get-word-slices) | 分词 | go-cqhttp | ✓ | ✗ |
| [`get_config`](./get-config) | 获取协议端配置 | LLBot | ✓ | ✗ |
| [`set_config`](./set-config) | 设置协议端配置 | LLBot | ✓ | ✗ |
| [`get_event`](./get-event) | 获取事件 | LLBot | ✓ | ✗ |
| [`llonebot_debug`](./llonebot-debug) | 调试接口 | LLBot | ✓ | ✗ |
| [`scan_qrcode`](./scan-qrcode) | 扫码登录 | LLBot | ✓ | ✗ |
| [`get_guild_list`](./get-guild-list) | 获取频道列表 | NapCat+LLBot | ✓ | ✗ |
| [`send_pb`](./send-pb) | LLBot 发送原始 Protobuf 数据 | LLBot | ✗ | ✗ |
