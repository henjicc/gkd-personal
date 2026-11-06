import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      actionMaximum: 2,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          actionCd: 500,
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/16187624',
            'https://i.gkd.li/i/16484445',
          ],
          action: 'clickCenter',
          key: 0,
        },
      ],
      order: -10,
    },
  ],
});
