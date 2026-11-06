import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.ky.medical.reference',
  name: '用药参考',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: '[vid="btn_go"][text^="关闭"]',
      snapshotUrls: 'https://i.gkd.li/i/12918049',
      order: -10,
    },
  ],
});
