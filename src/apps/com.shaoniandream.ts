import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.shaoniandream',
  name: '少年梦阅读',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="countdown"]',
          exampleUrls: 'https://e.gkd.li/080e7f84-c8ac-48b3-ba82-c1dbb795f4f6',
          snapshotUrls: 'https://i.gkd.li/i/13236791',
        },
      ],
      order: -10,
    },
  ],
});
