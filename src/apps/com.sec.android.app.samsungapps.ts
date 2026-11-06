import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.sec.android.app.samsungapps',
  name: '(三星)应用商店',
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
          action: 'clickCenter',
          matches: '[vid="skip"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14810528',
            'https://i.gkd.li/i/18329468',
          ],
        },
      ],
      order: -10,
    },
  ],
});
