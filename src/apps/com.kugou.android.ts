import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[desc="跳过"||desc="GdtCountDownView"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12775410',
            'https://i.gkd.li/i/13426030',
            'https://i.gkd.li/i/13468987',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.6858',
            top: 'width * 0.3906',
          },
          matches: '[desc="createSkipView"]',
          exampleUrls:
            'https://m.gkd.li/57941037/fc4a38c9-20aa-4cfc-9a92-c20e9194418b',
          snapshotUrls: 'https://i.gkd.li/i/14609953',
        },
      ],
      order: -10,
    },
  ],
});
