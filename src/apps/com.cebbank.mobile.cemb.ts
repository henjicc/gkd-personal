import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="tv_skip"]',
          exampleUrls: 'https://e.gkd.li/81f951ce-39b0-4677-93a7-25b5a709b46d',
          snapshotUrls: 'https://i.gkd.li/i/17615867',
        },
      ],
      order: -10,
    },
  ],
});
