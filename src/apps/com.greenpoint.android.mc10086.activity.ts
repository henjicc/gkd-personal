import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16335136',
        },
        {
          key: 1,
          position: {
            left: 'width * 0.8731',
            top: 'width * 0.1352',
          },
          matches:
            '@FrameLayout[childCount=2] > [vid="ll_top_right"][childCount=0]',
          exampleUrls: 'https://e.gkd.li/6fca95f1-d672-4d1d-bcf5-e71f1865dd52',
          snapshotUrls: 'https://i.gkd.li/i/20903074',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16335136',
        },
      ],
      order: -10,
    },
  ],
});
