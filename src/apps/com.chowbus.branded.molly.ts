import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.chowbus.branded.molly',
  name: 'Molly Tea',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      forcedTime: 10000,
      actionMaximum: 3,
      actionCd: 800,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.chowbus.branded.branded_app.MainActivity',
          matches: '[desc^="Skip"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/29147518',
          exampleUrls: 'https://e.gkd.li/a43170a0-8196-49d8-bb4d-3554aeae1900',
        },
      ],
      order: -10,
    },
  ],
});
