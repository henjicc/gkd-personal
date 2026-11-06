import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jd.app.reader',
  name: '京东读书',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/6f4561e5-b998-43f9-8848-b6b43d045a3d',
          snapshotUrls: 'https://i.gkd.li/i/14189228',
        },
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="mJumpBtn"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/28a83ffc-ba28-4d0e-8f28-b48a4a542f23',
          snapshotUrls: 'https://i.gkd.li/i/16486457',
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.9007',
            top: 'width * 0.1603',
          },
          matches: '[vid="animation_view"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ab677b66-4681-4672-a1d6-3b5938e7f374',
          snapshotUrls: 'https://i.gkd.li/i/13264389',
        },
      ],
      order: -10,
    },
  ],
});
