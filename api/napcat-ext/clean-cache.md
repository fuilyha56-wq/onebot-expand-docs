# clean_cache

清理协议端缓存。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

无参数。

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "clean_cache",
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

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`set_restart`](./set-restart) — 重启协议端
- [`get_status`](./get-status) — 获取运行状态
