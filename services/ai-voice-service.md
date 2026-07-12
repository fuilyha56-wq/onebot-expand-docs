# AiVoiceService

AI 语音服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | AiVoiceService |
| 说明 | AI 语音服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_ai_characters

获取AI语音角色。

对应 OneBot API: get_ai_characters

`python
async def get_ai_characters(
    self,
    group_id: int | None = None,
    chat_type: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | None | None | Group id |
| chat_type | int | None | None | Chat type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AiVoiceService

service = AiVoiceService(plugin)
result = await service.get_ai_characters(group_id=..., chat_type=...)
`

---

### get_ai_record

生成AI语音。

对应 OneBot API: get_ai_record

`python
async def get_ai_record(
    self,
    group_id: int,
    character: str,
    text: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| character | str | - | Character |
| text | str | - | Text |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AiVoiceService

service = AiVoiceService(plugin)
result = await service.get_ai_record(group_id=..., character=..., text=...)
`

---

### send_group_ai_record

发送群AI语音。

对应 OneBot API: send_group_ai_record

`python
async def send_group_ai_record(
    self,
    group_id: int,
    character: str,
    text: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| character | str | - | Character |
| text | str | - | Text |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AiVoiceService

service = AiVoiceService(plugin)
result = await service.send_group_ai_record(group_id=..., character=..., text=...)
`

---

## 相关 API

- [get_ai_characters](../api/ai-voice/get-ai-characters) — get_ai_characters API 文档
- [get_ai_record](../api/ai-voice/get-ai-record) — get_ai_record API 文档
- [send_group_ai_record](../api/ai-voice/send-group-ai-record) — send_group_ai_record API 文档
