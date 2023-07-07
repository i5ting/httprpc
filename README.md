



## 方式1

> GET /call/path?$p=[ serialized-parameters ]

测试

http://127.0.0.1:3000/a/a?$p=["hello"]

## 方式2

```
POST /call/path
Content-Type: application/json

[ serialized-parameters ]
```