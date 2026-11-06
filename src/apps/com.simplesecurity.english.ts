import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.simplesecurity.english',
  name: '水果派',
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
          matchDelay: 3000,
          matches: '[text="关闭广告"]',
          exampleUrls: 'https://e.gkd.li/8718ddc4-8775-482e-a259-bc43c7171fd8',
          snapshotUrls: 'https://i.gkd.li/i/13447714',
        },
      ],
      order: -10,
    },
  ],
});
