import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.mm.android.lc',
  name: '乐橙',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="advert_countdown_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b30750e1-92ca-452b-8467-a0074989ec92',
          snapshotUrls: 'https://i.gkd.li/i/14586621',
        },
      ],
      order: -10,
    },
  ],
});
