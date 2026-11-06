import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
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
          matches: '[vid="splash_skip_button"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/33750455',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][clickable=true][width<500 && height<300]',
          snapshotUrls: 'https://i.gkd.li/i/33750485',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/33630317',
            'https://i.gkd.li/i/33750400',
          ],
          exampleUrls: 'https://e.gkd.li/2c5cc57a-1e92-4e83-b31e-9342aa75034c',
        },
      ],
      order: -10,
    },
  ],
});
