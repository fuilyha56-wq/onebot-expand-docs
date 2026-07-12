# 架构设计

OneBot Expand 采用双层组件设计，确保 LLM 调用与程序化调用两条路径都清晰可控。

## 双层组件设计

### Tool 层

每个 API 对应一个 Tool 类（共 185 个），供 LLM 直接调用。Tool 层受**总开关**和**独立开关**双重控制。

### Service 层

一类功能聚合为一个 Service（共 23 个），供其他插件程序化调用。Service 层**不受总开关影响**，始终启用。

## 调用链

```
LLM 调用 → Tool.execute（总开关 + 独立开关检查）→ _call_onebot_api → onebot_adapter → NapCat/SnowLuma
其他插件 → Service.method（独立开关检查）→ _call_onebot_api → onebot_adapter → NapCat/SnowLuma
```

## 关键机制

### 1. Tool 总开关 `enable_all_tools`

位于 `api_switches` 配置节，**默认 `false`**：

- **`true`**：各 Tool 的独立开关 `enable_<action>` 生效，可单独启停
- **`false`（默认）**：所有 Tool 一律禁用，LLM 调用任何 Tool 都直接返回禁用响应

::: tip Service 不受总开关影响
Service 路径始终启用，确保其他插件通过 Service 调用的路径不会中断。
:::

### 2. Tool 独立开关 `enable_<action>`

每个 Tool 对应一个独立开关，**默认全部 `false`**。需要启用某个 Tool 时：

1. 将 `enable_all_tools` 设为 `true`
2. 将对应的 `enable_<action>` 设为 `true`

### 3. 别名机制

部分 action 有历史别名（如 `nc_get_rkey` → `get_rkey`、`.ocr_image` → `ocr_image`）。别名与主名共用同一开关和同一 handler，调用时通过 `resolve_action()` 解析为主名。

完整别名列表见 [API 索引](../api/)。

### 4. 适配器兼容性标记

每个 API 在 `api_defs.py` 标记：

- `napcat_only`：`True` 表示 NapCat 专属，SnowLuma 不支持
- `snowluma_compat`：`False` 表示 SnowLuma 不兼容

调用方可根据标记选择合适的 API。

## 23 个 Service 功能域

| Service | 域 | 说明 |
|---|---|---|
| MessageService | message | 消息发送/撤回/已读/转发 |
| GroupService | group | 群禁言/踢出/管理/头衔/匿名 |
| FileService | file | 群私聊文件上传、图片/语音获取、流式文件 |
| AccountService | account | 登录号/好友/群列表与详情 |
| NapcatExtService | napcat_ext | NapCat 状态/Cookies/CSRF/精华/版本 |
| GroupFileService | group_file | 群文件 CRUD/文件夹/转存/重命名 |
| GroupNoticeService | group_notice | 群公告 |
| GroupExtService | group_ext | 群头像/备注/加群选项/签到/打卡 |
| RequestService | request | 好友/加群请求处理 |
| UserExtService | user_ext | 好友备注/分类/单向好友/资料/头像 |
| StatusService | status | 在线状态/DIY状态/输入状态 |
| PokeService | poke | 戳一拍 |
| EmojiExtService | emoji_ext | 收藏表情CRUD/详情/备注/移动/回应 |
| AiVoiceService | ai_voice | AI角色/语音生成 |
| CredService | cred | clientkey/credentials/rkey/URL安全/OCR/下载/解密 |
| MiscService | misc | 机型/退出/包状态/内联键盘/小程序/翻译/收藏/SSO包/快速操作/分词 |
| FlashService | flash | 闪传任务/消息/文件列表/URL/分享/下载/文件集CRUD |
| GroupAlbumService | group_album | 群相册列表/上传/评论/点赞/删除 |
| GroupTodoService | group_todo | 群待办设置/完成/取消 |
| QzoneService | qzone | 说说列表/动态/发表/删除/点赞/评论/拉黑/权限 |
| ArkService | ark | 用户/群Ark卡片分享 |
| PathMapperService | path_mapper | 路径映射 |
| EmojiService | emoji | 表情发送与回应 |

## 下一步

- [配置说明](./configuration) — 了解所有配置项
- [API 文档](../api/) — 浏览全部 185 个 API
- [Service 文档](../services/) — 浏览 23 个 Service
