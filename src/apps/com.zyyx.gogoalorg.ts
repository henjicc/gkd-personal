import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.zyyx.gogoalorg',
  name: 'Go-Goal',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.AdvertrisementActivity',
          matches:
            'RelativeLayout[childCount=3] > [vid="iv_bottom_view"] - [text$="跳转"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26194519',
        },
      ],
      order: -10,
    },
  ],
});
