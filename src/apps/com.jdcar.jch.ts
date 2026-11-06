import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jdcar.jch',
  name: '京东养车',
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
          matches:
            '@[vid^="tv_jump"][visibleToUser=true] - [vid="splash_ad_layout"]',
          exampleUrls: 'https://e.gkd.li/123daf14-31ac-4b5f-93cf-8b05efa26d03',
          snapshotUrls: 'https://i.gkd.li/i/18308609',
        },
      ],
      order: -10,
    },
  ],
});
