# CredService

凭证/安全/下载服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | CredService |
| 说明 | 凭证/安全/下载服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_clientkey

获取clientkey。

对应 OneBot API: get_clientkey

`python
async def get_clientkey(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.get_clientkey()
`

---

### get_credentials

获取凭证。

对应 OneBot API: get_credentials

`python
async def get_credentials(
    self,
    domain: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| domain | str | - | Domain |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.get_credentials(domain=...)
`

---

### get_rkey

获取rkey。

对应 OneBot API: get_rkey

`python
async def get_rkey(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.get_rkey()
`

---

### get_rkey_server

获取rkey服务器信息。

对应 OneBot API: get_rkey_server

`python
async def get_rkey_server(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.get_rkey_server()
`

---

### check_url_safely

检查链接安全性。

对应 OneBot API: check_url_safely

`python
async def check_url_safely(
    self,
    url: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| url | str | - | Url |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.check_url_safely(url=...)
`

---

### ocr_image

OCR图片。

对应 OneBot API: ocr_image

`python
async def ocr_image(
    self,
    image: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| image | str | - | Image |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.ocr_image(image=...)
`

---

### download_file

下载文件。

对应 OneBot API: download_file

`python
async def download_file(
    self,
    url: str,
    name: str = '',
    headers: list[str] | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| url | str | - | Url |
| name | str | '' | Name |
| headers | list[str] | None | None | Headers |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.download_file(url=..., name=..., headers=...)
`

---

### request_decrypt_key

请求数据库解密密钥（SnowLuma 扩展）。

对应 OneBot API: request_decrypt_key

`python
async def request_decrypt_key(
    self,
    db_path: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| db_path | str | - | Db path |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import CredService

service = CredService(plugin)
result = await service.request_decrypt_key(db_path=...)
`

---

## 相关 API

- [get_clientkey](../api/cred/get-clientkey) — get_clientkey API 文档
- [get_credentials](../api/cred/get-credentials) — get_credentials API 文档
- [get_rkey](../api/cred/get-rkey) — get_rkey API 文档
- [get_rkey_server](../api/cred/get-rkey-server) — get_rkey_server API 文档
- [check_url_safely](../api/cred/check-url-safely) — check_url_safely API 文档
