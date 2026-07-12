# QzoneService

QQ 空间服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | QzoneService |
| 说明 | QQ 空间服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_qzone_msg_list

获取QQ空间说说列表。

对应 OneBot API: get_qzone_msg_list

`python
async def get_qzone_msg_list(
    self,
    pos: int = 0,
    num: int = 10,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| pos | int | 0 | Pos |
| num | int | 10 | Num |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.get_qzone_msg_list(pos=..., num=...)
`

---

### get_qzone_feeds

获取QQ空间好友动态。

对应 OneBot API: get_qzone_feeds

`python
async def get_qzone_feeds(
    self,
    page_num: int = 0,
    count: int = 10,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| page_num | int | 0 | Page num |
| count | int | 10 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.get_qzone_feeds(page_num=..., count=...)
`

---

### send_qzone_msg

发表说说。

对应 OneBot API: send_qzone_msg

`python
async def send_qzone_msg(
    self,
    content: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| content | str | - | Content |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.send_qzone_msg(content=...)
`

---

### delete_qzone_msg

删除说说。

对应 OneBot API: delete_qzone_msg

`python
async def delete_qzone_msg(
    self,
    tid: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| tid | str | - | Tid |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.delete_qzone_msg(tid=...)
`

---

### like_qzone

给说说点赞。

对应 OneBot API: like_qzone

`python
async def like_qzone(
    self,
    tid: str,
    target_uin: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| tid | str | - | Tid |
| target_uin | int | None | None | Target uin |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.like_qzone(tid=..., target_uin=...)
`

---

### unlike_qzone

取消点赞。

对应 OneBot API: unlike_qzone

`python
async def unlike_qzone(
    self,
    tid: str,
    target_uin: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| tid | str | - | Tid |
| target_uin | int | None | None | Target uin |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.unlike_qzone(tid=..., target_uin=...)
`

---

### comment_qzone

评论说说。

对应 OneBot API: comment_qzone

`python
async def comment_qzone(
    self,
    tid: str,
    content: str,
    target_uin: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| tid | str | - | Tid |
| content | str | - | Content |
| target_uin | int | None | None | Target uin |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.comment_qzone(tid=..., content=..., target_uin=...)
`

---

### set_qzone_ban

拉黑或解除拉黑某人（机器人自身 QQ 空间黑名单；SnowLuma 扩展）。

对应 OneBot API: set_qzone_ban

`python
async def set_qzone_ban(
    self,
    user_id: int,
    enable: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| enable | bool | True | Enable |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.set_qzone_ban(user_id=..., enable=...)
`

---

### set_qzone_msg_right

修改一条已发说说的查看权限（SnowLuma 扩展）。

对应 OneBot API: set_qzone_msg_right

`python
async def set_qzone_msg_right(
    self,
    tid: str,
    ugc_right: int,
    target_uins: list[int] | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| tid | str | - | Tid |
| ugc_right | int | - | Ugc right |
| target_uins | list[int] | None | None | Target uins |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import QzoneService

service = QzoneService(plugin)
result = await service.set_qzone_msg_right(tid=..., ugc_right=..., target_uins=...)
`

---

## 相关 API

- [get_qzone_msg_list](../api/qzone/get-qzone-msg-list) — get_qzone_msg_list API 文档
- [get_qzone_feeds](../api/qzone/get-qzone-feeds) — get_qzone_feeds API 文档
- [send_qzone_msg](../api/qzone/send-qzone-msg) — send_qzone_msg API 文档
- [delete_qzone_msg](../api/qzone/delete-qzone-msg) — delete_qzone_msg API 文档
- [like_qzone](../api/qzone/like-qzone) — like_qzone API 文档
