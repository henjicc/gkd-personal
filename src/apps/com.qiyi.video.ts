import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.qiyi.video',
  name: '爱奇艺',
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
          matches: '@[clickable=true] >(1,2) [text="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13160866',
            'https://i.gkd.li/i/13379565',
            'https://i.gkd.li/i/18135566',
          ],
        },
      ],
      order: -10,
    },
  ],
});
