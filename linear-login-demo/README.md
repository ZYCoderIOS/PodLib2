# Linear Login Demo

一个用于演示 Linear × GitHub 研发闭环的最小登录业务。

## 功能

- 邮箱、密码表单校验
- 模拟异步登录请求
- 登录成功/失败反馈
- 成功后保存演示 session
- 后续通过 Linear Issue 独立增加文案、埋点、Review 等改动

## 测试账号

- 邮箱：`demo@example.com`
- 密码：`123456`

## 本地运行

该页面使用 ES Module，建议在仓库根目录启动本地静态服务，例如：

```bash
python3 -m http.server 8080
```

然后访问：

`http://localhost:8080/linear-login-demo/`

## Linear 演练

基线版本故意保留登录按钮文案为「登录」。

- ARY-8：改成「立即登录」
- ARY-9：增加按钮点击埋点
- ARY-10：完成自测与 Review

每个 Issue 应使用独立分支和 PR，避免把多个需求混进一次交付。
