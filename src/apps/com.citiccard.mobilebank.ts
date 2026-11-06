import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="btn_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/12684908',
        },
        {
          key: 1,
          matches: '[vid="jump"]',
          snapshotUrls: 'https://i.gkd.li/i/13049013',
        },
      ],
      order: -10,
    },
  ],
});
