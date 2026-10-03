# Codex Context

本文档用于让 Codex 快速理解当前 Linear + GitHub 学习项目上下文。

## 项目目的

本项目使用一个真实但最小的登录业务，学习 Linear 核心研发流程，包括 Issue 拆分、分支开发、PR、Review、Merge，以及 Linear 与 GitHub 自动化联动。

## Linear 信息

- Workspace: `Arycode`
- Project: `[演示] App 登录页小优化`

## 当前 Issue 状态

- ARY-8「登录按钮文案改为立即登录」：已通过 PR #1 合并，并由 GitHub/Linear 自动化流转到 Done。
- ARY-9「增加登录按钮点击埋点」：当前 In Progress。
- ARY-10「完成自测与 Review」：当前 Todo。

说明：在实际团队中，Review 往往通过 Issue 状态表达，不一定单独创建 Review Issue。

## GitHub 仓库

- Repository: `ZYCoderIOS/PodLib2`
- Local path: `/Users/AryCode/Desktop/linear_learn/PodLib2`
- Default branch: `master`

## 当前开发分支

```bash
codeary/ary-9-增加登录按钮点击埋点
```

## 现有 Demo 目录

目录：

```text
linear-login-demo/
```

包含文件：

- `index.html`
- `app.js`
- `auth.js`
- `styles.css`
- `README.md`

测试账号：

```text
demo@example.com / 123456
```

## ARY-9 验收标准

- 点击「立即登录」按钮时上报 `login_button_click`。
- 不影响原有登录请求。
- 可在测试环境验证。

## 给 Codex 的明确任务

- 只修改 ARY-9 相关代码。
- 优先在 `linear-login-demo/app.js` 中增加最小埋点逻辑。
- 可用以下形式模拟埋点：

```js
console.log("[analytics]", "login_button_click", ...);
```

- 不做 UI/CSS/auth 重构。
- 不处理 ARY-10。
- 不修改 Linear 状态。

## 边界

Codex 只负责代码修改和本地验证。除非用户明确要求，不自动执行以下操作：

- `commit`
- `push`
- 创建 PR
- `merge`

## 下一步人工流程

1. `git diff` 自检。
2. commit message 建议：

```text
ARY-9: add login button click tracking
```

3. push 当前分支。
4. 创建 PR：

```text
ARY-9 增加登录按钮点击埋点
```

5. PR 描述包含：

```text
Fixes ARY-9
```

6. Review。
7. Merge。
8. Linear 自动 Done。

## Linear/GitHub Automation 当前约定

- Draft PR -> In Progress
- PR Open -> In Progress
- Review request/activity -> In Review
- PR Ready for merge -> No action
- PR Merge -> Done

## 团队规范建议

- branch 带 Issue ID。
- commit 带 Issue ID。
- PR 标题带 Issue ID。
- PR 描述使用 `Fixes ARY-xxx`。

## Codex 开始前检查清单

- 确认当前分支是 `codeary/ary-9-增加登录按钮点击埋点`。
- 确认工作区 clean，或确认已有未提交改动是否与 ARY-9 相关。
- 确认只修改 ARY-9 范围。
