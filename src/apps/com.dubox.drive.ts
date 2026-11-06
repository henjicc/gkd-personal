import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.dubox.drive',
  name: 'TeraBox',
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
          matches: 'TextView[vid="tv_skip"]',
          snapshotUrls: 'https://i.gkd.li/i/13200574',
        },
        {
          key: 1,
          matches: '@[vid="ivClose"] - * >2 [id="inmobi-ad"]',
          snapshotUrls: 'https://i.gkd.li/i/13688384',
        },
      ],
      order: -10,
    },
  ],
});
