# FileService

文件上传与管理服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | FileService |
| 说明 | 文件上传与管理服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### upload_group_file

上传群文件。

对应 OneBot API: upload_group_file

`python
async def upload_group_file(
    self,
    group_id: int,
    file_path: str,
    name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_path | str | - | File path |
| name | str | - | Name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.upload_group_file(group_id=..., file_path=..., name=...)
`

---

### upload_private_file

上传私聊文件。

对应 OneBot API: upload_private_file

`python
async def upload_private_file(
    self,
    user_id: int,
    file_path: str,
    name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| file_path | str | - | File path |
| name | str | - | Name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.upload_private_file(user_id=..., file_path=..., name=...)
`

---

### get_file

获取文件信息（NapCat 扩展）。

对应 OneBot API: get_file

`python
async def get_file(
    self,
    file_id: str,
    url: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file_id | str | - | File id |
| url | bool | False | Url |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.get_file(file_id=..., url=...)
`

---

### get_image

获取图片信息。

对应 OneBot API: get_image

`python
async def get_image(
    self,
    file: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | - | File |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.get_image(file=...)
`

---

### get_record

获取语音文件信息。

对应 OneBot API: get_record

`python
async def get_record(
    self,
    file: str,
    out_format: str = 'mp3',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | - | File |
| out_format | str | 'mp3' | Out format |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.get_record(file=..., out_format=...)
`

---

### send_online_file

发送在线文件（NapCat 扩展）。

对应 OneBot API: send_online_file

`python
async def send_online_file(
    self,
    user_id: int,
    file_path: str,
    file_name: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| file_path | str | - | File path |
| file_name | str | '' | File name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.send_online_file(user_id=..., file_path=..., file_name=...)
`

---

### send_online_folder

发送在线文件夹（NapCat 扩展）。

对应 OneBot API: send_online_folder

`python
async def send_online_folder(
    self,
    user_id: int,
    folder_path: str,
    folder_name: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| folder_path | str | - | Folder path |
| folder_name | str | '' | Folder name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.send_online_folder(user_id=..., folder_path=..., folder_name=...)
`

---

### get_online_file_msg

获取在线文件消息列表（NapCat 扩展）。

对应 OneBot API: get_online_file_msg

`python
async def get_online_file_msg(
    self,
    user_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.get_online_file_msg(user_id=...)
`

---

### receive_online_file

接收在线文件（NapCat 扩展）。

对应 OneBot API: receive_online_file

`python
async def receive_online_file(
    self,
    user_id: int,
    msg_id: str,
    element_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| msg_id | str | - | Msg id |
| element_id | str | - | Element id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.receive_online_file(user_id=..., msg_id=..., element_id=...)
`

---

### refuse_online_file

拒绝在线文件（NapCat 扩展）。

对应 OneBot API: refuse_online_file

`python
async def refuse_online_file(
    self,
    user_id: int,
    msg_id: str,
    element_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| msg_id | str | - | Msg id |
| element_id | str | - | Element id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.refuse_online_file(user_id=..., msg_id=..., element_id=...)
`

---

### cancel_online_file

取消已发送的在线文件（NapCat 扩展）。

对应 OneBot API: cancel_online_file

`python
async def cancel_online_file(
    self,
    user_id: int,
    msg_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| msg_id | str | - | Msg id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.cancel_online_file(user_id=..., msg_id=...)
`

---

### clean_stream_temp_file

清理流式传输临时文件。

对应 OneBot API: clean_stream_temp_file

`python
async def clean_stream_temp_file(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.clean_stream_temp_file()
`

---

### upload_file_stream

流式上传文件（分块传输）。

对应 OneBot API: upload_file_stream

`python
async def upload_file_stream(
    self,
    stream_id: str,
    chunk_data: str | None = None,
    chunk_index: int | None = None,
    total_chunks: int | None = None,
    file_size: int | None = None,
    expected_sha256: str | None = None,
    is_complete: bool | None = None,
    filename: str | None = None,
    reset: bool | None = None,
    verify_only: bool | None = None,
    file_retention: int = 0,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| stream_id | str | - | Stream id |
| chunk_data | str | None | None | Chunk data |
| chunk_index | int | None | None | Chunk index |
| total_chunks | int | None | None | Total chunks |
| file_size | int | None | None | File size |
| expected_sha256 | str | None | None | Expected sha256 |
| is_complete | bool | None | None | Is complete |
| filename | str | None | None | Filename |
| reset | bool | None | None | Reset |
| verify_only | bool | None | None | Verify only |
| file_retention | int | 0 | File retention |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.upload_file_stream(stream_id=..., chunk_data=..., chunk_index=...)
`

---

### download_file_stream

流式下载文件。

对应 OneBot API: download_file_stream

`python
async def download_file_stream(
    self,
    file: str | None = None,
    file_id: str | None = None,
    chunk_size: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | None | None | File |
| file_id | str | None | None | File id |
| chunk_size | int | None | None | Chunk size |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.download_file_stream(file=..., file_id=..., chunk_size=...)
`

---

### download_file_record_stream

流式下载语音文件并转换格式。

对应 OneBot API: download_file_record_stream

`python
async def download_file_record_stream(
    self,
    file: str | None = None,
    file_id: str | None = None,
    chunk_size: int | None = None,
    out_format: str | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | None | None | File |
| file_id | str | None | None | File id |
| chunk_size | int | None | None | Chunk size |
| out_format | str | None | None | Out format |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.download_file_record_stream(file=..., file_id=..., chunk_size=...)
`

---

### download_file_image_stream

流式下载图片文件。

对应 OneBot API: download_file_image_stream

`python
async def download_file_image_stream(
    self,
    file: str | None = None,
    file_id: str | None = None,
    chunk_size: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | None | None | File |
| file_id | str | None | None | File id |
| chunk_size | int | None | None | Chunk size |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FileService

service = FileService(plugin)
result = await service.download_file_image_stream(file=..., file_id=..., chunk_size=...)
`

---

## 相关 API

- [upload_group_file](../api/file/upload-group-file) — upload_group_file API 文档
- [upload_private_file](../api/file/upload-private-file) — upload_private_file API 文档
- [get_file](../api/file/get-file) — get_file API 文档
- [get_image](../api/file/get-image) — get_image API 文档
- [get_record](../api/file/get-record) — get_record API 文档
- [send_online_file](../api/file/send-online-file) — send_online_file API 文档
- [send_online_folder](../api/file/send-online-folder) — send_online_folder API 文档
- [get_online_file_msg](../api/file/get-online-file-msg) — get_online_file_msg API 文档
- [receive_online_file](../api/file/receive-online-file) — receive_online_file API 文档
- [refuse_online_file](../api/file/refuse-online-file) — refuse_online_file API 文档
- [cancel_online_file](../api/file/cancel-online-file) — cancel_online_file API 文档
- [clean_stream_temp_file](../api/file/clean-stream-temp-file) — clean_stream_temp_file API 文档
- [upload_file_stream](../api/file/upload-file-stream) — upload_file_stream API 文档
- [download_file_stream](../api/file/download-file-stream) — download_file_stream API 文档
- [download_file_record_stream](../api/file/download-file-record-stream) — download_file_record_stream API 文档
- [download_file_image_stream](../api/file/download-file-image-stream) — download_file_image_stream API 文档
