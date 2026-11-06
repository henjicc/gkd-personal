import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.excean.gspace',
  name: 'OurPlay',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      ignoreGlobalGroupMatch: true,
      rules: [
        {
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0] +2 LinearLayout >3 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8bad82e1-d00c-4d39-978c-513980b94962',
          snapshotUrls: 'https://i.gkd.li/i/24539921',
        },
      ],
      order: -10,
    },
  ],
});
