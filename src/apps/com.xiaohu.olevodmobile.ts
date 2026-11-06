import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.xiaohu.olevodmobile',
  name: '欧乐影院',
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
          matches: '@[vid="init_time_text"] + [text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12826256',
        },
      ],
      order: -10,
    },
  ],
});
