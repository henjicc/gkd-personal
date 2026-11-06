import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
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
          matches: '[vid="skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/670b95f6-12d0-4787-9158-98ac52eb1641',
          snapshotUrls: [
            'https://i.gkd.li/i/16828031',
            'https://i.gkd.li/i/16828053',
          ],
        },
      ],
      order: -10,
    },
  ],
});
