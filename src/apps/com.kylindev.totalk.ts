import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.kylindev.totalk',
  name: '滔滔对讲',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 1,
          matches: '[vid="adgain_splash_skip_ll"]',
          snapshotUrls: 'https://i.gkd.li/i/30350919',
        },
      ],
      order: -10,
    },
  ],
});
