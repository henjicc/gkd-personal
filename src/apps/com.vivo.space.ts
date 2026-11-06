import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.vivo.space',
  name: 'vivo 官网',
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
          matches: '[vid="timer" || vid="jump_over"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e531ea4e-874f-4da4-bcf1-f585887f753c',
          snapshotUrls: [
            'https://i.gkd.li/i/16775800',
            'https://i.gkd.li/i/19499311',
          ],
        },
      ],
      order: -10,
    },
  ],
});
