import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.zgnet.eClass',
  name: '掌医课堂',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: 'TextView[id$="tv_close_time"&&text^="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/12644260',
        },
      ],
      order: -10,
    },
  ],
});
