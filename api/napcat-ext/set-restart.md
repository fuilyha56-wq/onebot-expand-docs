# set_restart

重启协议端（异步操作）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `delay` | int | 0 | ❌ | 延迟重启时间（毫秒） |

## 响应

无响应数据（异步重启，调用后协议端将在指定延迟后重启）。

## 示例

**请求：**

```json
{
  "action": "set_restart",
  "params": {
    "delay": 1000
  }
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

::: warning 注意
调用此 API 后协议端会异步重启，连接会断开，客户端需要做好重连处理。
:::

## 相关 API

- [`clean_cache`](./clean-cache) — 清理缓存
- [`get_status`](./get-status) — 获取运行状态
