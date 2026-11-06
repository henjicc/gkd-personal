import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'dxwt.questionnaire.ui',
  name: '10000社区',
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
          matches:
            '@View[desc^="关闭"][visibleToUser=true] <3 FrameLayout < FrameLayout < FrameLayout < [vid="container"]',
          snapshotUrls: 'https://i.gkd.li/i/13255491',
          excludeSnapshotUrls: 'https://i.gkd.li/i/13259475',
        },
      ],
      order: -10,
    },
  ],
});
