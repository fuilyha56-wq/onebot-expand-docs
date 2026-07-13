# set_group_search

设置群可被搜索状态。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_search",
  "params": {
    "group_id": 123456789
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

napcat 与 snowluma 实现一致，无差异。

## 相关 API

- [`set_group_add_option`](./set-group-add-option) — 设置群入群方式选项
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
