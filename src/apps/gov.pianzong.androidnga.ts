import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'gov.pianzong.androidnga',
  name: 'NGA玩家社区',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchRoot: true,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[vid="tv_tiaoguo" || vid="iv_tg_ad" || vid="tv_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d7520bc7-588b-4654-b6aa-d2736ac200bf',
          snapshotUrls: [
            'https://i.gkd.li/i/13798686',
            'https://i.gkd.li/i/17082872',
            'https://i.gkd.li/i/17082897',
            'https://i.gkd.li/i/17082899',
            'https://i.gkd.li/i/23432463',
          ],
        },
      ],
      order: -10,
    },
  ],
});
