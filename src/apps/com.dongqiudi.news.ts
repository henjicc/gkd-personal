import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.dongqiudi.news',
  name: '懂球帝',
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
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/20218520',
            'https://i.gkd.li/i/29968669',
          ],
        },
        {
          key: 1,
          matches:
            '@View[clickable=true] - [text="互动广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/20262129',
        },
        {
          key: 2,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"]',
          snapshotUrls: 'https://i.gkd.li/i/20262130',
        },
      ],
      order: -10,
    },
  ],
});
