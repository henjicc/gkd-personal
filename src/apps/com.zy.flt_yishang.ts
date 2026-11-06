import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.zy.flt_yishang',
  name: '飞猫管家',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          matches:
            '[desc*="跳过"][desc.length<10][width<500 && height<200][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/882f36c1-d172-436f-a43e-194d75940886',
          snapshotUrls: 'https://i.gkd.li/i/24097095',
        },
      ],
      order: -10,
    },
  ],
});
