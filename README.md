# httprpc

看到 https://httpc.dev/ 的用法有一点意思，随便写写。

> Build function-based API with minimal code and end-to-end type safety

# 约定

## 方式1

> GET /call/path?$p=[ serialized-parameters ]

测试

> http://127.0.0.1:3000/a/a?$p=["hello"]

## 方式2

```
POST /call/path
Content-Type: application/json

[ serialized-parameters ]
```

cli 

```
$ curl -H "Content-Type: application/json" -X POST -d '["22hello", "001"]'  http://127.0.0.1:3000/a/a
```

# 用法

函数写法

```
module.exports = function a(p1,b){
    console.dir(this.path)
    console.dir(this.query)
    if (this.method === 'POST'){
        return "this is a post"
    }
    
    return `${p1}+${b}`
}
```

说明

- this是koa中间件的ctx
- 参数，是调用端决定的

返回json，直接返回object即可

```
module.exports = function (a, b) {
    return {
        a: a,
        b: b
    }
}
```

# 项目

## 启动

> npm start

## 测试

> npm test

# 写在最后

这是一个demo项目，特性足够了，其他自己改吧