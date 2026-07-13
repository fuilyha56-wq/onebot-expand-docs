# get_robot_uin_range

获取机器人 QQ 号区间。返回被识别为机器人的 QQ 号范围列表，可用于判断某 QQ 号是否为官方机器人。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API（`napcat_only=True`，`snowluma_compat=False`）
:::

## 参数

本 API 无参数。

## 响应

返回 JSON 数组，每个元素结构如下：

| 字段 | 类型 | 说明 |
|---|---|---|
| `minUin` | number | 区间最小 QQ 号 |
| `maxUin` | number | 区间最大 QQ 号 |

## 示例

**请求：**

```json
{
  "action": "get_robot_uin_range",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "minUin": 2854196300,
      "maxUin": 2854196399
    },
    {
      "minUin": 2854196400,
      "maxUin": 2854196499
    },
    {
      "minUin": 2854196500,
      "maxUin": 2854196599
    }
  ],
  "echo": "1"
}
```

## 四方差异

| 平台 | 支持情况 | 说明 |
|---|---|---|
| OneBot v11 | ✗ | 标准未定义此 API |
| NapCat | ✓ 独占 | 完整支持，插件扩展 `napcat_only=True` |
| SnowLuma | ✗ | 不支持，`snowluma_compat=False` |

::: warning 注意
此 API 为 NapCat 独占的插件扩展，仅 NapCat 实现可用。调用前请确认运行平台，其他平台调用将返回错误。
:::

## 相关 API

- [`get_login_info`](./get-login-info) — 获取登录号信息
- [`get_stranger_info`](./get-stranger-info) — 获取陌生人信息
