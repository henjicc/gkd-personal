import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.xpx365.projphoto',
  name: '工程相机',
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
          snapshotUrls: [
            'https://i.gkd.li/i/16030619',
            'https://i.gkd.li/i/16030620',
            'https://i.gkd.li/i/16030622',
          ],
        },
        {
          key: 1,
          matches: '[vid="ms_skipView"][visibleToUser=true][width<165]',
          snapshotUrls: 'https://i.gkd.li/i/32683549',
        },
        {
          key: 2,
          matches:
            '@ImageView[clickable=true][visibleToUser=true] - [text="|"]',
          snapshotUrls: 'https://i.gkd.li/i/16030413',
        },
        {
          key: 3,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13827755',
        },
      ],
      order: -10,
    },
  ],
});
