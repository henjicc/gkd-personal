import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.shanghaionstar',
  name: '安吉星',
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
          matches: '[vid="jump_view"]',
          snapshotUrls: 'https://i.gkd.li/i/13071523',
        },
      ],
      order: -10,
    },
  ],
});
