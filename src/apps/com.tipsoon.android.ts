import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.tipsoon.android',
  name: '简讯',
  groups: [
    {
      key: -1,
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
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls:
            'https://m.gkd.li/57941037/7ba2a5cd-12e8-4ac3-a867-8d0f81247d93',
          snapshotUrls: 'https://i.gkd.li/i/14568317',
        },
      ],
      order: -10,
    },
  ],
});
