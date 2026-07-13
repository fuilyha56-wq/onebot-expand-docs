# get_qzone_msg_list

获取QQ空间说说列表。

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
| `pos` | int | 0 | ❌ | 起始位置 |
| `num` | int | 20 | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `msg_list` | list[dict] | 说说列表 |

**`msg_list` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `tid` | str | 说说 ID |
| `content` | str | 说说内容 |
| `create_time` | int | 发布时间（时间戳） |
| `uin` | int | 发布者 QQ |

## 示例

**请求：**

```json
{
  "action": "get_qzone_msg_list",
  "params": {
    "pos": 0,
    "num": 20
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "msg_list": [
      {
        "tid": "abc123",
        "content": "今天天气真好！",
        "create_time": 1700000000,
        "uin": 100012345
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_qzone_feeds`](./get-qzone-feeds) — 获取QQ空间好友动态
- [`send_qzone_msg`](./send-qzone-msg) — 发表说说
- [`delete_qzone_msg`](./delete-qzone-msg) — 删除说说
