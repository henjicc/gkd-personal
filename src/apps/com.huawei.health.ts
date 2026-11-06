import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.huawei.health',
  name: '华为运动健康',
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
          key: 0,
          action: 'clickCenter',
          matches: '[vid="hiad_skip_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13215012',
            'https://i.gkd.li/i/13228290',
          ],
        },
      ],
      order: -10,
    },
  ],
});
