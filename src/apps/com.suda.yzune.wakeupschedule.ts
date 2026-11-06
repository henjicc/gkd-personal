import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.suda.yzune.wakeupschedule',
  name: 'WakeUp课程表',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '@ImageView[visibleToUser=true][width<156 && height<156] < * < [width>1000] +2 ViewGroup >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/33348748',
        },
      ],
      order: -10,
    },
  ],
});
