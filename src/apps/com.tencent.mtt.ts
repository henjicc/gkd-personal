import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.tencent.mtt',
  name: 'QQ浏览器',
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
          matches: '@LinearLayout[clickable=true] > TextView[text="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/12472630',
        },
        {
          key: 1,
          matches:
            '@View[clickable=true][childCount=0] +2 * >3 [text^="向上滑动"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14819586',
            'https://i.gkd.li/i/23743205',
          ],
        },
      ],
      order: -10,
    },
  ],
});
