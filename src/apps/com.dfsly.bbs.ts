import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.dfsly.bbs',
  name: 'AC匿名版',
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
          matches:
            '[id="android:id/content"] >7 FrameLayout[childCount=7] > LinearLayout >3 ImageView[text=null][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13330351',
        },
      ],
      order: -10,
    },
  ],
});
