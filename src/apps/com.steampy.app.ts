import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.steampy.app',
  name: 'SteamPY',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[vid="pyAdLayout"] > [vid="count_down_view"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26231218',
        },
      ],
      order: -10,
    },
  ],
});
