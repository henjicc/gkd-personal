import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
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
          actionDelay: 1000,
          matches:
            '@[desc="跳过广告"][clickable=true] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/e36d701f-bcee-48d5-99da-1c5301101d9e',
          snapshotUrls: 'https://i.gkd.li/i/23282793',
        },
      ],
      order: -10,
    },
  ],
});
