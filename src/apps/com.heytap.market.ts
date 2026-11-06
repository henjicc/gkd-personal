import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.heytap.market',
  name: 'OPPO软件商店',
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
          matches: '@[clickable=true] > [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/14668997',
        },
      ],
      order: -10,
    },
  ],
});
