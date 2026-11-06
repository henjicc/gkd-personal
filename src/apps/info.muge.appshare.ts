import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
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
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13842826',
            'https://i.gkd.li/i/13939089',
            'https://i.gkd.li/i/14260635',
          ],
        },
        {
          key: 1,
          matches:
            '@[clickable=true][height<100] - [text*="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/i/14553551',
        },
        {
          key: 2,
          matches:
            '@[clickable=true][width<130 && height<130] <(1,2) [childCount=2] >2 [text="跳过"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/15269380',
            'https://i.gkd.li/i/15285908',
            'https://i.gkd.li/i/15520277',
            'https://i.gkd.li/i/28050329',
          ],
        },
        {
          key: 3,
          matches:
            '@ImageView[width<138 && height<138] < * < ViewGroup +(2,3) [childCount=1] >2 [text="广告"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/28050314',
            'https://i.gkd.li/i/28050323',
          ],
        },
      ],
      order: -10,
    },
  ],
});
