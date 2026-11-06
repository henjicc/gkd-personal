import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.picacomic.fregata',
  name: 'PicACG',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches: '[vid="imageButton_popup_close"]',
          exampleUrls:
            'https://m.gkd.li/83610194/2a9a1179-3a50-4317-900a-42c8197517ed',
          snapshotUrls: 'https://i.gkd.li/i/13422624',
        },
      ],
      order: -10,
    },
  ],
});
