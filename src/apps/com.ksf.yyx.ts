import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.ksf.yyx',
  name: 'OMOFUN',
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
          matches: '[vid="ksad_splash_circle_skip_view"]',
          snapshotUrls: 'https://i.gkd.li/i/12775918',
        },
        {
          key: 1,
          matches:
            '[vid="ksad_splash_root_container"] [childCount=3] > @ImageView[clickable=true] - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/12775919',
        },
        {
          key: 2,
          matches: '[text^="跳过 "][text.length<=4][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/12775926',
        },
      ],
      order: -10,
    },
  ],
});
