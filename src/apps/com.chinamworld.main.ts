import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
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
          matches: [
            '[vid="ll_load"][visibleToUser=true]',
            '[vid="skip"][visibleToUser=true]',
          ],
          exampleUrls: 'https://e.gkd.li/69567942-f5a1-40f0-b4b6-7f8bf2348052',
          snapshotUrls: 'https://i.gkd.li/i/20649289',
        },
      ],
      order: -10,
    },
  ],
});
