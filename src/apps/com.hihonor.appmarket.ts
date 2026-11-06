import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.hihonor.appmarket',
  name: '荣耀应用市场',
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
          matches: '[vid="tv_operation_skip" || vid="btn_skip"]',
          exampleUrls: 'https://e.gkd.li/549d5fc1-20a2-42aa-b249-4cc8896807e6',
          snapshotUrls: [
            'https://i.gkd.li/i/16406381',
            'https://i.gkd.li/i/29175881',
          ],
        },
      ],
      order: -10,
    },
  ],
});
