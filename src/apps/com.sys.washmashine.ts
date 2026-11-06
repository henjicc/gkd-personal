import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.sys.washmashine',
  name: '小依',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches: '@[desc="skip_button"][clickable=true] - [text="跳过"]',
          exampleUrls: 'https://e.gkd.li/b0d7d8e3-fc68-4be8-aba0-c8100d4143fb',
          snapshotUrls: 'https://i.gkd.li/i/22274999',
        },
      ],
      order: -10,
    },
  ],
});
