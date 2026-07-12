# MiscService

机型/其他服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | MiscService |
| 说明 | 机型/其他服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_model_show

获取机型展示。

对应 OneBot API: _get_model_show

`python
async def get_model_show(
    self,
    model: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| model | str | - | Model |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.get_model_show(model=...)
`

---

### set_model_show

设置机型展示。

对应 OneBot API: _set_model_show

`python
async def set_model_show(
    self,
    model: str,
    show: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| model | str | - | Model |
| show | str | - | Show |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.set_model_show(model=..., show=...)
`

---

### bot_exit

退出机器人。

对应 OneBot API: bot_exit

`python
async def bot_exit(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.bot_exit()
`

---

### nc_get_packet_status

获取packet状态。

对应 OneBot API: nc_get_packet_status

`python
async def nc_get_packet_status(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.nc_get_packet_status()
`

---

### click_inline_keyboard_button

点击内联键盘按钮。

对应 OneBot API: click_inline_keyboard_button

`python
async def click_inline_keyboard_button(
    self,
    group_id: int,
    bot_appid: int,
    msg_seq: int,
    button_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| bot_appid | int | - | Bot appid |
| msg_seq | int | - | Msg seq |
| button_id | str | - | Button id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.click_inline_keyboard_button(group_id=..., bot_appid=..., msg_seq=...)
`

---

### get_mini_app_ark

获取小程序卡片。

对应 OneBot API: get_mini_app_ark

`python
async def get_mini_app_ark(
    self,
    type: str,
    title: str,
    desc: str,
    pic_url: str,
    jump_url: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| type | str | - | Type |
| title | str | - | Title |
| desc | str | - | Desc |
| pic_url | str | - | Pic url |
| jump_url | str | - | Jump url |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.get_mini_app_ark(type=..., title=..., desc=...)
`

---

### translate_en2zh

英译中。

对应 OneBot API: translate_en2zh

`python
async def translate_en2zh(
    self,
    words: list[str],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| words | list[str] | - | Words |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.translate_en2zh(words=...)
`

---

### create_collection

创建收藏。

对应 OneBot API: create_collection

`python
async def create_collection(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.create_collection()
`

---

### get_collection_list

获取收藏列表。

对应 OneBot API: get_collection_list

`python
async def get_collection_list(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.get_collection_list()
`

---

### send_packet

发送原始SSO包。

对应 OneBot API: send_packet

`python
async def send_packet(
    self,
    cmd: str,
    data: dict[str, Any] | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| cmd | str | - | Cmd |
| data | dict[str, Any] | None | None | Data |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.send_packet(cmd=..., data=...)
`

---

### handle_quick_operation

go-cqhttp 快速操作（NapCat 与 SnowLuma 均支持）。

对应 OneBot API: handle_quick_operation

`python
async def handle_quick_operation(
    self,
    context: dict[str, Any],
    operation: dict[str, Any],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| context | dict[str, Any] | - | Context |
| operation | dict[str, Any] | - | Operation |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.handle_quick_operation(context=..., operation=...)
`

---

### get_word_slices

go-cqhttp 分词（仅 NapCat 支持，SnowLuma 未实现）。

对应 OneBot API: get_word_slices

`python
async def get_word_slices(
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
from onebot_expand.services import MiscService

service = MiscService(plugin)
result = await service.get_word_slices(content=...)
`

---

## 相关 API

- [`_get_model_show`](../api/misc/get-model-show) — _get_model_show API 文档
- [`_set_model_show`](../api/misc/set-model-show) — _set_model_show API 文档
- [bot_exit](../api/misc/bot-exit) — bot_exit API 文档
- [nc_get_packet_status](../api/misc/nc-get-packet-status) — nc_get_packet_status API 文档
- [click_inline_keyboard_button](../api/misc/click-inline-keyboard-button) — click_inline_keyboard_button API 文档
