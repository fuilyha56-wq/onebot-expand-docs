# MessageService

消息发送与管理服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | MessageService |
| 说明 | 消息发送与管理服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### send_group_msg

发送群聊消息。

对应 OneBot API: send_group_msg

`python
async def send_group_msg(
    self,
    group_id: int,
    message: list[dict[str, Any]],
    auto_escape: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| message | list[dict[str, Any]] | - | Message |
| auto_escape | bool | False | Auto escape |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_group_msg(group_id=..., message=..., auto_escape=...)
`

---

### send_private_msg

发送私聊消息。

对应 OneBot API: send_private_msg

`python
async def send_private_msg(
    self,
    user_id: int,
    message: list[dict[str, Any]],
    auto_escape: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| message | list[dict[str, Any]] | - | Message |
| auto_escape | bool | False | Auto escape |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_private_msg(user_id=..., message=..., auto_escape=...)
`

---

### delete_msg

撤回消息。

对应 OneBot API: delete_msg

`python
async def delete_msg(
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
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.delete_msg(message_id=...)
`

---

### get_msg

获取消息详情。

对应 OneBot API: get_msg

`python
async def get_msg(
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
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.get_msg(message_id=...)
`

---

### get_forward_msg

获取合并转发消息内容。

对应 OneBot API: get_forward_msg

`python
async def get_forward_msg(
    self,
    message_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | str | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.get_forward_msg(message_id=...)
`

---

### send_like

发送名片点赞。

对应 OneBot API: send_like

`python
async def send_like(
    self,
    user_id: int,
    times: int = 1,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| times | int | 1 | Times |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_like(user_id=..., times=...)
`

---

### send_poke

发送戳一戳（NapCat 扩展）。

对应 OneBot API: send_poke

`python
async def send_poke(
    self,
    user_id: int,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_poke(user_id=..., group_id=...)
`

---

### send_forward_msg

发送合并转发消息（NapCat 扩展）。

对应 OneBot API: send_forward_msg

`python
async def send_forward_msg(
    self,
    group_id: int | None = None,
    user_id: int | None = None,
    messages: list[dict[str, Any]] | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | None | None | Group id |
| user_id | int | None | None | User id |
| messages | list[dict[str, Any]] | None | None | Messages |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_forward_msg(group_id=..., user_id=..., messages=...)
`

---

### send_group_forward_msg

发送群合并转发消息（go-cqhttp 兼容）。

对应 OneBot API: send_group_forward_msg

`python
async def send_group_forward_msg(
    self,
    group_id: int,
    messages: list[dict[str, Any]],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| messages | list[dict[str, Any]] | - | Messages |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_group_forward_msg(group_id=..., messages=...)
`

---

### send_private_forward_msg

发送私聊合并转发消息（go-cqhttp 兼容）。

对应 OneBot API: send_private_forward_msg

`python
async def send_private_forward_msg(
    self,
    user_id: int,
    messages: list[dict[str, Any]],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| messages | list[dict[str, Any]] | - | Messages |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_private_forward_msg(user_id=..., messages=...)
`

---

### get_group_msg_history

获取群消息历史（go-cqhttp 兼容）。

对应 OneBot API: get_group_msg_history

`python
async def get_group_msg_history(
    self,
    group_id: int,
    message_seq: int | None = None,
    count: int = 20,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| message_seq | int | None | None | Message seq |
| count | int | 20 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.get_group_msg_history(group_id=..., message_seq=..., count=...)
`

---

### get_friend_msg_history

获取好友消息历史（go-cqhttp 兼容）。

对应 OneBot API: get_friend_msg_history

`python
async def get_friend_msg_history(
    self,
    user_id: int,
    message_seq: int | None = None,
    count: int = 20,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| message_seq | int | None | None | Message seq |
| count | int | 20 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.get_friend_msg_history(user_id=..., message_seq=..., count=...)
`

---

### forward_friend_single_msg

转发单条消息给好友（扩展）。

对应 OneBot API: forward_friend_single_msg

`python
async def forward_friend_single_msg(
    self,
    message_id: int,
    user_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| user_id | int | - | User id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.forward_friend_single_msg(message_id=..., user_id=...)
`

---

### forward_group_single_msg

转发单条消息到群（扩展）。

对应 OneBot API: forward_group_single_msg

`python
async def forward_group_single_msg(
    self,
    message_id: int,
    group_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| group_id | int | - | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.forward_group_single_msg(message_id=..., group_id=...)
`

---

### mark_msg_as_read

标记消息已读（go-cqhttp 兼容）。

对应 OneBot API: mark_msg_as_read

`python
async def mark_msg_as_read(
    self,
    message_id: int,
    target_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| target_id | int | None | None | Target id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.mark_msg_as_read(message_id=..., target_id=...)
`

---

### mark_group_msg_as_read

标记群消息已读（扩展）。

对应 OneBot API: mark_group_msg_as_read

`python
async def mark_group_msg_as_read(
    self,
    message_id: int,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.mark_group_msg_as_read(message_id=..., group_id=...)
`

---

### mark_private_msg_as_read

标记私聊消息已读（扩展）。

对应 OneBot API: mark_private_msg_as_read

`python
async def mark_private_msg_as_read(
    self,
    message_id: int,
    user_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| user_id | int | None | None | User id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.mark_private_msg_as_read(message_id=..., user_id=...)
`

---

### send_msg

发送消息（通用，按 message_type 或 user_id/group_id 自动路由）。

对应 OneBot API: send_msg

`python
async def send_msg(
    self,
    message: list[dict[str, Any]],
    message_type: str | None = None,
    user_id: int | None = None,
    group_id: int | None = None,
    auto_escape: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message | list[dict[str, Any]] | - | Message |
| message_type | str | None | None | Message type |
| user_id | int | None | None | User id |
| group_id | int | None | None | Group id |
| auto_escape | bool | False | Auto escape |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.send_msg(message=..., message_type=..., user_id=...)
`

---

### upload_forward_msg

上传合并转发消息，返回 res_id（SnowLuma 扩展）。

对应 OneBot API: upload_forward_msg

`python
async def upload_forward_msg(
    self,
    messages: list[dict[str, Any]],
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| messages | list[dict[str, Any]] | - | Messages |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MessageService

service = MessageService(plugin)
result = await service.upload_forward_msg(messages=..., group_id=...)
`

---

## 相关 API

- [send_group_msg](../api/message/send-group-msg) — send_group_msg API 文档
- [send_private_msg](../api/message/send-private-msg) — send_private_msg API 文档
- [delete_msg](../api/message/delete-msg) — delete_msg API 文档
- [get_msg](../api/message/get-msg) — get_msg API 文档
- [get_forward_msg](../api/message/get-forward-msg) — get_forward_msg API 文档
