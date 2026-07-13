# 完整兼容性矩阵

下表列出 OneBot Expand 插件全部 205 个 API 在 OneBot v11 / NapCat / SnowLuma 三方的兼容性。LLBot 扩展 API（20 个）通过 NapCat 列标记兼容性（LLBot 基于 NapCat 扩展，NapCat 兼容即 LLBot 兼容）。

## 图例

- ✅ 支持
- ❌ 不支持
- 🔶 专属（该协议端独有）

## 消息 (message)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `send_group_msg` | 发送群聊消息 | ✅ | ✅ | ✅ |
| `send_private_msg` | 发送私聊消息 | ✅ | ✅ | ✅ |
| `send_msg` | 发送消息（通用） | ✅ | ✅ | ✅ |
| `delete_msg` | 撤回消息 | ✅ | ✅ | ✅ |
| `get_msg` | 获取消息 | ✅ | ✅ | ✅ |
| `get_forward_msg` | 获取合并转发消息 | ✅ | ✅ | ✅ |
| `send_like` | 发送好友赞 | ✅ | ✅ | ✅ |
| `send_poke` | 戳一戳 | ❌ | ✅ | ✅ |
| `send_forward_msg` | 发送合并转发 | ❌ | ✅ | ✅ |
| `send_group_forward_msg` | 群合并转发 | ❌ | ✅ | ✅ |
| `send_private_forward_msg` | 私聊合并转发 | ❌ | ✅ | ✅ |
| `get_group_msg_history` | 群消息历史 | ❌ | ✅ | ✅ |
| `get_friend_msg_history` | 好友消息历史 | ❌ | ✅ | ✅ |
| `forward_friend_single_msg` | 转发到私聊 | ❌ | ✅ | ✅ |
| `forward_group_single_msg` | 转发到群聊 | ❌ | ✅ | ✅ |
| `mark_msg_as_read` | 标记已读 | ❌ | ✅ | ✅ |
| `mark_group_msg_as_read` | 标记群已读 | ❌ | ✅ | ✅ |
| `mark_private_msg_as_read` | 标记私聊已读 | ❌ | ✅ | ✅ |
| `_mark_all_as_read` | 全部已读 | ❌ | ✅ | ✅ |
| `upload_forward_msg` | 上传合并转发 | ❌ | ✅ | ✅ |

## 群操作 (group)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_group_kick` | 踢出群成员 | ✅ | ✅ | ✅ |
| `set_group_ban` | 禁言群成员 | ✅ | ✅ | ✅ |
| `set_group_anonymous_ban` | 禁言匿名成员 | ✅ | ✅ | ✅ |
| `set_group_whole_ban` | 全体禁言 | ✅ | ✅ | ✅ |
| `set_group_admin` | 设置管理员 | ✅ | ✅ | ✅ |
| `set_group_anonymous` | 匿名聊天 | ✅ | ✅ | ✅ |
| `set_group_card` | 设置群名片 | ✅ | ✅ | ✅ |
| `set_group_name` | 设置群名 | ✅ | ✅ | ✅ |
| `set_group_leave` | 退出群聊 | ✅ | ✅ | ✅ |
| `set_group_special_title` | 设置专属头衔 | ✅ | ✅ | ✅ |

## 文件操作 (file)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `upload_group_file` | 上传群文件 | ✅ | ✅ | ✅ |
| `upload_private_file` | 上传私聊文件 | ✅ | ✅ | ✅ |
| `get_file` | 获取文件信息 | ❌ | ✅ | ✅ |
| `get_image` | 获取图片 | ✅ | ✅ | ✅ |
| `get_record` | 获取语音 | ✅ | ✅ | ✅ |
| `send_online_file` | 发送在线文件 | ❌ | 🔶 | ❌ |
| `send_online_folder` | 发送在线文件夹 | ❌ | 🔶 | ❌ |
| `get_online_file_msg` | 在线文件消息列表 | ❌ | 🔶 | ❌ |
| `receive_online_file` | 接收在线文件 | ❌ | 🔶 | ❌ |
| `refuse_online_file` | 拒绝在线文件 | ❌ | 🔶 | ❌ |
| `cancel_online_file` | 取消在线文件 | ❌ | 🔶 | ❌ |
| `clean_stream_temp_file` | 清理临时文件 | ❌ | ✅ | ✅ |
| `upload_file_stream` | 流式上传 | ❌ | ✅ | ✅ |
| `download_file_stream` | 流式下载 | ❌ | ✅ | ✅ |
| `download_file_record_stream` | 流式下载语音 | ❌ | ✅ | ✅ |
| `download_file_image_stream` | 流式下载图片 | ❌ | ✅ | ✅ |

## 账号信息 (account)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_login_info` | 获取登录信息 | ✅ | ✅ | ✅ |
| `get_stranger_info` | 获取陌生人信息 | ✅ | ✅ | ✅ |
| `get_friend_list` | 获取好友列表 | ✅ | ✅ | ✅ |
| `get_group_list` | 获取群列表 | ✅ | ✅ | ✅ |
| `get_group_member_list` | 获取群成员列表 | ✅ | ✅ | ✅ |
| `get_group_member_info` | 获取群成员详情 | ✅ | ✅ | ✅ |
| `get_group_info` | 获取群信息 | ✅ | ✅ | ✅ |
| `get_group_detail_info` | 获取群详细信息 | ❌ | ✅ | ✅ |
| `get_group_honor_info` | 获取群荣誉信息 | ✅ | ✅ | ✅ |
| `get_robot_uin_range` | 获取机器人UIN范围 | ❌ | 🔶 | ❌ |

## NapCat 扩展 (napcat_ext)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_msg_emoji_like` | 消息表情回应 | ❌ | ✅ | ✅ |
| `get_essence_msg_list` | 精华消息列表 | ❌ | ✅ | ✅ |
| `get_online_clients` | 在线客户端列表 | ❌ | ✅ | ✅ |
| `get_cookies` | 获取 Cookies | ✅ | ✅ | ✅ |
| `get_csrf_token` | 获取 CSRF Token | ✅ | ✅ | ✅ |
| `get_status` | 获取运行状态 | ✅ | ✅ | ✅ |
| `set_restart` | 重启协议端 | ✅ | ✅ | ✅ |
| `clean_cache` | 清理缓存 | ✅ | ✅ | ✅ |
| `can_send_image` | 检查图片支持 | ✅ | ✅ | ✅ |
| `can_send_record` | 检查语音支持 | ✅ | ✅ | ✅ |
| `get_version_info` | 获取版本信息 | ✅ | ✅ | ✅ |
| `set_essence_msg` | 设置精华消息 | ❌ | ✅ | ✅ |
| `delete_essence_msg` | 删除精华消息 | ❌ | ✅ | ✅ |
| `get_group_at_all_remain` | @全体剩余次数 | ❌ | ✅ | ✅ |
| `fetch_ptt_text` | 语音转文字 | ❌ | ✅ | ✅ |

## 群文件管理 (group_file)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_group_file_url` | 群文件下载链接 | ❌ | ✅ | ✅ |
| `get_group_root_files` | 群根目录文件 | ❌ | ✅ | ✅ |
| `get_group_files_by_folder` | 群子目录文件 | ❌ | ✅ | ✅ |
| `delete_group_file` | 删除群文件 | ❌ | ✅ | ✅ |
| `create_group_file_folder` | 创建群文件夹 | ❌ | ✅ | ✅ |
| `delete_group_folder` | 删除群文件夹 | ❌ | ✅ | ✅ |
| `get_group_file_system_info` | 群文件系统信息 | ❌ | ✅ | ✅ |
| `move_group_file` | 移动群文件 | ❌ | ✅ | ✅ |
| `rename_group_file` | 重命名群文件 | ❌ | ✅ | ✅ |
| `rename_group_file_folder` | 重命名群文件夹 | ❌ | ✅ | ✅ |
| `trans_group_file` | 转存群文件 | ❌ | ✅ | ✅ |
| `get_private_file_url` | 私聊文件链接 | ❌ | ✅ | ✅ |
| `set_group_file_forever` | 设置群文件永久保存 | ❌ | ✅ | ❌ |

## 群公告 (group_notice)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `_send_group_notice` | 发送群公告 | ❌ | ✅ | ✅ |
| `_get_group_notice` | 获取群公告 | ❌ | ✅ | ✅ |
| `_del_group_notice` | 删除群公告 | ❌ | ✅ | ✅ |

## 群管理扩展 (group_ext)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_group_portrait` | 设置群头像 | ❌ | ✅ | ✅ |
| `set_group_remark` | 设置群备注 | ❌ | ✅ | ✅ |
| `set_group_add_option` | 设置加群选项 | ❌ | ✅ | ✅ |
| `set_group_search` | 允许群被搜索 | ❌ | ✅ | ✅ |
| `set_group_robot_add_option` | 机器人加群选项 | ❌ | ✅ | ✅ |
| `set_group_kick_members` | 批量踢出 | ❌ | ✅ | ✅ |
| `get_group_shut_list` | 禁言列表 | ❌ | ✅ | ✅ |
| `get_group_ignored_notifies` | 被过滤入群请求 | ❌ | ✅ | ✅ |
| `get_group_ignore_add_request` | 被忽略入群请求 | ❌ | ✅ | ✅ |
| `get_group_info_ex` | 群信息扩展 | ❌ | ✅ | ✅ |
| `set_group_sign` | 群签到 | ❌ | ✅ | ✅ |
| `get_group_signed_list` | 今日打卡列表 | ❌ | ✅ | ✅ |
| `batch_delete_group_member` | 批量踢出群成员 | ❌ | ✅ | ❌ |
| `set_group_msg_mask` | 设置群消息屏蔽 | ❌ | ✅ | ❌ |

## 请求处理 (request)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_friend_add_request` | 处理加好友请求 | ✅ | ✅ | ✅ |
| `set_group_add_request` | 处理加群请求 | ✅ | ✅ | ✅ |
| `get_group_system_msg` | 获取群系统消息 | ✅ | ✅ | ✅ |
| `get_doubt_friends_add_request` | 可疑好友申请 | ❌ | ✅ | ✅ |
| `set_doubt_friends_add_request` | 处理可疑好友申请 | ❌ | ✅ | ✅ |

## 用户信息扩展 (user_ext)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `delete_friend` | 删除好友 | ❌ | ✅ | ✅ |
| `set_friend_remark` | 设置好友备注 | ❌ | ✅ | ✅ |
| `get_friends_with_category` | 分组好友列表 | ❌ | ✅ | ✅ |
| `get_unidirectional_friend_list` | 单向好友列表 | ❌ | ✅ | ✅ |
| `set_qq_profile` | 设置QQ资料 | ❌ | ✅ | ✅ |
| `set_qq_avatar` | 设置QQ头像 | ❌ | ✅ | ✅ |
| `set_self_longnick` | 设置个性签名 | ❌ | ✅ | 
| `get_profile_like_me` | 获取自身被点赞列表 | ❌ | ✅ | ❌ |
| `get_profile_like_count` | 获取用户点赞总数 | ❌ | ✅ | ❌ |
| `get_qq_avatar` | 获取QQ头像URL | ❌ | ✅ | ❌ |
| `set_friend_category` | 设置好友分类 | ❌ | ✅ | ❌ |✅ |
| `get_recent_contact` | 最近联系人 | ❌ | ✅ | ✅ |
| `get_profile_like` | 资料点赞 | ❌ | ✅ | ✅ |

## 在线状态 (status)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_online_status` | 设置在线状态 | ❌ | ✅ | ✅ |
| `set_diy_online_status` | DIY在线状态 | ❌ | ✅ | ✅ |
| `set_input_status` | 设置输入状态 | ❌ | ✅ | ✅ |
| `nc_get_user_status` | 获取用户状态 | ❌ | ✅ | ✅ |

## 戳一拍 (poke)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `friend_poke` | 好友戳一拍 | ❌ | ✅ | ✅ |
| `group_poke` | 群戳一拍 | ❌ | ✅ | ✅ |

## 表情/收藏扩展 (emoji_ext)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `fetch_custom_face` | 获取收藏表情 | ❌ | ✅ | ✅ |
| `fetch_custom_face_detail` | 收藏表情详情 | ❌ | 🔶 | ❌ |
| `add_custom_face` | 添加收藏表情 | ❌ | ✅ | ✅ |
| `delete_custom_face` | 删除收藏表情 | ❌ | ✅ | ✅ |
| `set_custom_face_desc` | 修改表情描述 | ❌ | 🔶 | ❌ |
| `modify_custom_face` | 修改表情备注 | ❌ | ✅ | ✅ |
| `get_recommend_face` | 获取推荐表情 | ❌ | ✅ | ❌ |
| `unset_msg_emoji_like` | 取消消息表情回应 | ❌ | ✅ | ❌ |
| `move_custom_face_to_front` | 表情移到最前 | ❌ | ✅ | ✅ |
| `fetch_emoji_like` | 表情回应分页 | ❌ | ✅ | ✅ |
| `get_emoji_likes` | 表情回应用户 | ❌ | ✅ | ✅ |
| `set_group_reaction` | 群消息表情回应 | ❌ | ✅ | ✅ |

## AI 语音 (ai_voice)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_ai_characters` | AI语音角色 | ❌ | ✅ | ✅ |
| `get_ai_record` | 生成AI语音 | ❌ | ✅ | ✅ |
| `send_group_ai_record` | 发送群AI语音 | ❌ | ✅ | ✅ |

## 凭证/安全/下载 (cred)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_clientkey` | 获取clientkey | ❌ | ✅ | ✅ |
| `get_credentials` | 获取凭证 | ❌ | ✅ | ✅ |
| `get_rkey` | 获取rkey | ❌ | ✅ | ✅ |
| `get_rkey_server` | rkey服务器信息 | ❌ | ✅ | ✅ |
| `check_url_safely` | 检查链接安全性 | ❌ | ✅ | ✅ |
| `ocr_image` | OCR图片 | ❌ | ✅ | ✅ |
| `download_file` | 下载文件 | ❌ | ✅ | ✅ |
| `request_decrypt_key` | 请求解密密钥 | ❌ | ✅ | ✅ |

## 机型/其他 (misc)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `_get_model_show` | 获取机型展示 | ❌ | ✅ | ✅ |
| `_set_model_show` | 设置机型展示 | ❌ | ✅ | ✅ |
| `bot_exit` | 退出机器人 | ❌ | ✅ | ✅ |
| `nc_get_packet_status` | packet状态 | ❌ | ✅ | ✅ |
| `click_inline_keyboard_button` | 点击内联键盘 | ❌ | ✅ | ✅ |
| `get_mini_app_ark` | 小程序卡片 | ❌ | ✅ | ✅ |
| `translate_en2zh` | 英译中 | ❌ | ✅ | ✅ |
| `create_collection` | 创建收藏 | ❌ | ✅ | ✅ |
| `get_collection_list` | 获取收藏列表 | ❌ | ✅ | ✅ |
| `send_packet` | 发送SSO包 | ❌ | ✅ | ✅ |
| `handle_quick_operation` | 快速操作 | ❌ | ✅ | ✅ |
| `get_word_slices` | 分词 | ❌ | 🔶 | ❌ |
| `get_config` | 获取协议端配置 | ❌ | ✅ | ❌ |
| `set_config` | 设置协议端配置 | ❌ | ✅ | ❌ |
| `get_event` | 获取事件 | ❌ | ✅ | ❌ |
| `llonebot_debug` | 调试接口 | ❌ | ✅ | ❌ |
| `scan_qrcode` | 扫码登录 | ❌ | ✅ | ❌ |
| `get_guild_list` | 获取频道列表 | ❌ | ✅ | ❌ |

## 闪传 (flash)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `create_flash_task` | 创建闪传任务 | ❌ | ✅ | ✅ |
| `send_flash_msg` | 发送闪传消息 | ❌ | ✅ | ✅ |
| `get_flash_file_list` | 闪传文件列表 | ❌ | ✅ | ✅ |
| `get_flash_file_url` | 闪传文件URL | ❌ | ✅ | ✅ |
| `get_share_link` | 获取分享链接 | ❌ | ✅ | ✅ |
| `download_fileset` | 下载文件集 | ❌ | ✅ | ✅ |
| `get_fileset_info` | 文件集信息 | ❌ | ✅ | ✅ |
| `get_fileset_id` | 获取fileset_id | ❌ | ✅ | ✅ |
| `list_filesets` | 列出文件集 | ❌ | ✅ | ✅ |
| `delete_flash_file` | 删除闪传文件 | ❌ | ✅ | ✅ |
| `rename_flash_file` | 重命名闪传文件 | ❌ | ✅ | ✅ |
| `get_flash_file_download_urls` | 获取闪传文件下载URL | ❌ | ✅ | ❌ |
| `upload_flash_file` | 上传闪传文件 | ❌ | ✅ | ❌ |
| `reshare_flash_file` | 重新分享闪传文件 | ❌ | ✅ | ❌ |

## 群相册 (group_album)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_qun_album_list` | 群相册列表 | ❌ | ✅ | ✅ |
| `upload_image_to_qun_album` | 上传群相册图片 | ❌ | ✅ | ✅ |
| `get_group_album_media_list` | 群相册媒体列表 | ❌ | ✅ | ✅ |
| `do_group_album_comment` | 评论群相册 | ❌ | ✅ | ✅ |
| `set_group_album_media_like` | 点赞群相册 | ❌ | ✅ | ✅ |
| `cancel_group_album_media_like` | 取消点赞 | ❌ | ✅ | ✅ |
| `del_group_album_media` | 删除群相册媒体 | ❌ | ✅ | ✅ |
| `create_group_album` | 创建群相册 | ❌ | ✅ | ❌ |
| `delete_group_album` | 删除群相册 | ❌ | ✅ | ❌ |

## 群待办 (group_todo)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `set_group_todo` | 设置群待办 | ❌ | ✅ | ✅ |
| `complete_group_todo` | 完成群待办 | ❌ | ✅ | ✅ |
| `cancel_group_todo` | 取消群待办 | ❌ | ✅ | ✅ |

## QQ 空间 (qzone)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `get_qzone_msg_list` | 说说列表 | ❌ | ✅ | ✅ |
| `get_qzone_feeds` | 好友动态 | ❌ | ✅ | ✅ |
| `send_qzone_msg` | 发表说说 | ❌ | ✅ | ✅ |
| `delete_qzone_msg` | 删除说说 | ❌ | ✅ | ✅ |
| `like_qzone` | 点赞说说 | ❌ | ✅ | ✅ |
| `unlike_qzone` | 取消点赞 | ❌ | ✅ | ✅ |
| `comment_qzone` | 评论说说 | ❌ | ✅ | ✅ |
| `set_qzone_ban` | 拉黑 | ❌ | ✅ | ✅ |
| `set_qzone_msg_right` | 修改说说权限 | ❌ | ✅ | ✅ |

## Ark 分享 (ark)

| action | 说明 | OneBot v11 | NapCat | SnowLuma |
|---|---|---|---|---|
| `share_peer` | 分享用户/群卡片 | ❌ | ✅ | ✅ |
| `send_ark_share` | 分享Ark卡片 | ❌ | ✅ | ✅ |
| `share_group_ex` | 分享群卡片 | ❌ | ✅ | ✅ |
| `send_group_ark_share` | 群Ark分享 | ❌ | ✅ | ✅ |
