import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.weico.international',
  name: '微博轻享版',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionCd: 500,
      actionMaximum: 3,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          order: -1,
          anyMatches: [
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14549281',
            'https://i.gkd.li/i/14549328',
            'https://i.gkd.li/i/18792649',
            'https://i.gkd.li/i/20990401',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '@[clickable=true] - [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
            '@[clickable=true][visibleToUser=true] + ViewGroup > [text="跳过"]',
          ],
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14661654',
            'https://i.gkd.li/i/14661622',
          ],
        },
      ],
      order: -10,
    },
  ],
});
