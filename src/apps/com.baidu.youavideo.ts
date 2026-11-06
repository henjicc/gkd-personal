import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.baidu.youavideo',
  name: '一刻相册',
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
          excludeMatches: '[text="开启安全备份"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23549481',
          excludeSnapshotUrls: 'https://i.gkd.li/i/23567868',
          exampleUrls: 'https://e.gkd.li/5185bf9d-70f7-4841-991e-55b1b6768e97',
        },
        {
          key: 1,
          matches:
            '@[text*="跳过"] + [visibleToUser=true] >(1,3) [text*="摇一摇" || text*="摇动" || text*="点击"]',
          snapshotUrls: 'https://i.gkd.li/i/23549490',
        },
        {
          key: 2,
          matches: '[vid="flash_fragment"] >n [vid="ms_skipView"]',
          snapshotUrls: 'https://i.gkd.li/i/30690903',
        },
        {
          key: 3,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23549504',
            'https://i.gkd.li/i/23549553',
          ],
        },
      ],
      order: -10,
    },
  ],
});
