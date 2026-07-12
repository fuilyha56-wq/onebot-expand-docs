# NapcatExtService

NapCat 扩展功能服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | NapcatExtService |
| 说明 | NapCat 扩展功能服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### set_msg_emoji_like

对消息添加/取消表情回应。

对应 OneBot API: set_msg_emoji_like

`python
async def set_msg_emoji_like(
    self,
    message_id: int,
    emoji_id: int,
    set: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| emoji_id | int | - | Emoji id |
| set | bool | True | Set |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.set_msg_emoji_like(message_id=..., emoji_id=..., set=...)
`

---

### get_essence_msg_list

获取群精华消息列表。

对应 OneBot API: get_essence_msg_list

`python
async def get_essence_msg_list(
    self,
    group_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_essence_msg_list(group_id=...)
`

---

### get_online_clients

获取在线客户端列表。

对应 OneBot API: get_online_clients

`python
async def get_online_clients(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_online_clients()
`

---

### get_cookies

获取 Cookies。

对应 OneBot API: get_cookies

`python
async def get_cookies(
    self,
    domain: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| domain | str | '' | Domain |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_cookies(domain=...)
`

---

### get_csrf_token

获取 CSRF Token。

对应 OneBot API: get_csrf_token

`python
async def get_csrf_token(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_csrf_token()
`

---

### get_status

获取协议端运行状态。

对应 OneBot API: get_status

`python
async def get_status(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_status()
`

---

### set_restart

重启协议端。

对应 OneBot API: set_restart

`python
async def set_restart(
    self,
    delay: int = 0,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| delay | int | 0 | Delay |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.set_restart(delay=...)
`

---

### clean_cache

清理协议端缓存。

对应 OneBot API: clean_cache

`python
async def clean_cache(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.clean_cache()
`

---

### can_send_image

检查是否支持发送图片。

对应 OneBot API: can_send_image

`python
async def can_send_image(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.can_send_image()
`

---

### can_send_record

检查是否支持发送语音。

对应 OneBot API: can_send_record

`python
async def can_send_record(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.can_send_record()
`

---

### get_version_info

获取协议端版本信息。

对应 OneBot API: get_version_info

`python
async def get_version_info(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_version_info()
`

---

### set_essence_msg

设置精华消息（go-cqhttp 兼容）。

对应 OneBot API: set_essence_msg

`python
async def set_essence_msg(
    self,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.set_essence_msg(message_id=...)
`

---

### delete_essence_msg

删除精华消息（go-cqhttp 兼容）。

对应 OneBot API: delete_essence_msg

`python
async def delete_essence_msg(
    self,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.delete_essence_msg(message_id=...)
`

---

### get_group_at_all_remain

获取@全体剩余次数（go-cqhttp 兼容）。

对应 OneBot API: get_group_at_all_remain

`python
async def get_group_at_all_remain(
    self,
    group_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.get_group_at_all_remain(group_id=...)
`

---

### fetch_ptt_text

获取语音转文字（扩展）。

对应 OneBot API: fetch_ptt_text

`python
async def fetch_ptt_text(
    self,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import NapcatExtService

service = NapcatExtService(plugin)
result = await service.fetch_ptt_text(message_id=...)
`

---

## 相关 API

- [set_msg_emoji_like](../api/napcat-ext/set-msg-emoji-like) — set_msg_emoji_like API 文档
- [get_essence_msg_list](../api/napcat-ext/get-essence-msg-list) — get_essence_msg_list API 文档
- [get_online_clients](../api/napcat-ext/get-online-clients) — get_online_clients API 文档
- [get_cookies](../api/napcat-ext/get-cookies) — get_cookies API 文档
- [get_csrf_token](../api/napcat-ext/get-csrf-token) — get_csrf_token API 文档
