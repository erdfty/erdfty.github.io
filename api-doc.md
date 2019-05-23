### 专题活动 - 堡垒之夜 - 领取免单券

- 方法 `POST`
- 接口 app/v2/activity/fortnite/recv_award
- 登陆 `必须`
- 参数

```
{
  "code": "code", //领券密码
}
```

- 返回

```
成功:
{
    "code": "100",
    "data": {
    	"money": 5 //优惠券面额
	}
}

失败:
{
    "code": "1000",
    "err": "xxx", //错误提示，比如 "你的暗号有误，请重新输入"
}

```