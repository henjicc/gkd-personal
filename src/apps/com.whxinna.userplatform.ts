import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.whxinna.userplatform',
  name: '住理生活',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26462136',
        },
        {
          key: 1,
          matches:
            '@[name$="View"][clickable=true][width<500 && height<300] <3 FrameLayout[childCount=4] <<(2,3,4) [vid="adsFl"]',
          snapshotUrls: [
            'https://i.gkd.li/i/26332230',
            'https://i.gkd.li/i/26462322',
            'https://i.gkd.li/i/31610751',
          ],
        },
      ],
      order: -10,
    },
  ],
});
