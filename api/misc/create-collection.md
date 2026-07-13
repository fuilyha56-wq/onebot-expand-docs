# create_collection

创建文本收藏。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

无

## 示例

**请求：**

```json
{
  "action": "create_collection",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_collection_list`](./get-collection-list) — 获取收藏列表
- [`translate_en2zh`](./translate-en2zh) — 英译中翻译
- [`get_mini_app_ark`](./get-mini-app-ark) — 签名小程序卡片
