import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'cn.samsclub.app',
  name: '山姆会员商店',
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
          matches:
            '@ImageView[clickable=true] <2 [vid="advertising_container"]',
          snapshotUrls: 'https://i.gkd.li/i/13609106',
        },
        {
          key: 1,
          matches: '@ImageView[vid="close_view"]',
          snapshotUrls: 'https://i.gkd.li/i/15879369',
        },
      ],
      order: -10,
    },
  ],
});
