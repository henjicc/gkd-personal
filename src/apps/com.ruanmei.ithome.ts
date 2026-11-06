import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.ruanmei.ithome',
  name: 'IT之家',
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
          excludeMatches: '[vid="iv_search_back"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/49015bf7-6513-40b2-a436-d3c386ef1891',
          snapshotUrls: [
            'https://i.gkd.li/i/16401878',
            'https://i.gkd.li/i/16401899',
          ],
        },
      ],
      order: -10,
    },
  ],
});
