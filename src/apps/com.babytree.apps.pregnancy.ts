import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.babytree.apps.pregnancy',
  name: '宝宝树孕育',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/12614757',
        },
        {
          key: 1,
          matches:
            '@View[childCount=0][clickable=true][visibleToUser=true] < RelativeLayout < FrameLayout + RelativeLayout >2 [text^="摇一摇"]',
          snapshotUrls: 'https://i.gkd.li/i/15566228',
        },
      ],
      order: -10,
    },
  ],
});
