import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.shizi.tool.p3',
  name: '动漫共和国',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="tobid_splash_skip_ll"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/22136545',
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23925246',
        },
        {
          key: 2,
          matches: '[text*="跳过"][text.length<10][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/30903944',
          excludeSnapshotUrls: 'https://i.gkd.li/i/30905793',
        },
      ],
      order: -10,
    },
  ],
});
