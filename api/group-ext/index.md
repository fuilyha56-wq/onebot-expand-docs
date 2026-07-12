# 群管理扩展 API

本分类包含 14 个群管理扩展 API，涵盖群头像/备注/加群选项/签到/打卡列表等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`set_group_portrait`](./set-group-portrait) | 设置群头像 | Expand | ✓ | ✓ |
| [`set_group_remark`](./set-group-remark) | 设置群备注 | Expand | ✓ | ✓ |
| [`set_group_add_option`](./set-group-add-option) | 设置加群选项 | Expand | ✓ | ✓ |
| [`set_group_search`](./set-group-search) | 设置群搜索 | Expand | ✓ | ✓ |
| [`set_group_robot_add_option`](./set-group-robot-add-option) | 设置机器人加群选项 | Expand | ✓ | ✓ |
| [`set_group_kick_members`](./set-group-kick-members) | 批量踢人 | Expand | ✓ | ✓ |
| [`get_group_shut_list`](./get-group-shut-list) | 获取群禁言列表 | Expand | ✓ | ✓ |
| [`get_group_ignored_notifies`](./get-group-ignored-notifies) | 获取群忽略的通知 | Expand | ✓ | ✓ |
| [`get_group_ignore_add_request`](./get-group-ignore-add-request) | 获取群忽略的加群请求 | Expand | ✓ | ✓ |
| [`get_group_info_ex`](./get-group-info-ex) | 获取群额外信息 | Expand | ✓ | ✓ |
| [`set_group_sign`](./set-group-sign) | 群签到 | Expand | ✓ | ✗ |
| [`get_group_signed_list`](./get-group-signed-list) | 获取群签到列表 | Expand | ✓ | ✓ |
| [`batch_delete_group_member`](./batch-delete-group-member) | 批量踢出群成员 | LLBot | ✓ | ✗ |
| [`set_group_msg_mask`](./set-group-msg-mask) | 设置群消息屏蔽 | LLBot | ✓ | ✗ |
