# get_collection_list

获取收藏列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `collections` | array | 收藏列表，每项含收藏内容、时间等信息 |

## 示例

**请求：**

```json
{
  "action": "get_collection_list",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "collections": [
      {
        "id": 1,
        "content": "收藏的文本内容",
        "create_time": 1752300000
      },
      {
        "id": 2,
        "content": "另一条收藏",
        "create_time": 1752400000
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`create_collection`](./create-collection) — 创建文本收藏
- [`translate_en2zh`](./translate-en2zh) — 英译中翻译
- [`send_packet`](./send-packet) — 发送原始 SSO 包
