# get_qzone_feeds

获取QQ空间好友动态。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `page_num` | int | 0 | ❌ | 页码（从 0 开始） |
| `count` | int | 20 | ❌ | 每页数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `feeds` | list[dict] | 好友动态列表 |

**`feeds` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `tid` | str | 动态 ID |
| `content` | str | 动态内容 |
| `uin` | int | 发布者 QQ |
| `create_time` | int | 发布时间（时间戳） |

## 示例

**请求：**

```json
{
  "action": "get_qzone_feeds",
  "params": {
    "page_num": 0,
    "count": 20
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "feeds": [
      {
        "tid": "feed_001",
        "content": "分享一首好听的歌",
        "uin": 100012345,
        "create_time": 1700000000
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_qzone_msg_list`](./get-qzone-msg-list) — 获取QQ空间说说列表
- [`like_qzone`](./like-qzone) — 给说说点赞
- [`comment_qzone`](./comment-qzone) — 评论说说
