import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.onethingcloud.android',
  name: '网心云',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '@View[desc*="跳过"][desc.length<10][visibleToUser=true] < View < View < View < View < FrameLayout < [id="android:id/content"]',
          exampleUrls: 'https://e.gkd.li/0d0560e5-2b7d-4599-8336-a5254d5e13ea',
          snapshotUrls: 'https://i.gkd.li/i/18094505',
        },
      ],
      order: -10,
    },
  ],
});
