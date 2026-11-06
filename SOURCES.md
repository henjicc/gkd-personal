# 来源与适配记录

## 项目结构

- [GKD 官方订阅模板](https://github.com/gkd-kit/subscription-template)
- 初始化参考提交：`de8d4c7146c1416e148b179f5b6ca39417e05681`
- 保留官方规则定义、选择器检查及构建工具，改用本仓库的自动构建流程。

## 哔哩哔哩

- [Lin-arm/GKD_subscription 开屏规则](https://github.com/Lin-arm/GKD_subscription/blob/main/src/apps/tv.danmaku.bili.ts)
- 初始参考：订阅 667 v626，规则组 key=-1。
- 规则沿革：gkd-kit/subscription → AIsouler/GKD_subscription → Lin-arm/GKD_subscription，详见上游 README。
- 2026-11-07：匹配 `count_down` / `skip` 的条件保持不变，动作改为 `clickCenter`。此前 `clickNode` 返回成功但用户反馈未跳过，修改后用户反馈生效，日志确认新动作执行。
- 继承最多两次点击、500ms 冷却，兼容可能连续出现的开屏广告；不加入首页广告规则。
- 现有快照链接均来自上游；本机截图、日志不在仓库内。

本文件记录来源和修改，不改变上游材料或依赖各自适用的授权条件。
