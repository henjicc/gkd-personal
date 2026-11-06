import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.oneshareclap.malaysian',
  name: '水果派',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[text="关闭广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14275367',
        },
      ],
      order: -10,
    },
  ],
});
