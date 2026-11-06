import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.tnscreen.main',
  name: '多屏互动',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          excludeMatches: [
            '[!(vid="welcome_ad_view_skip")] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
            '@[desc="close_button"] - [text="|"][visibleToUser=true]',
          ],
          matches:
            'LinearLayout[childCount>0] + LinearLayout[vid="welcome_ad_view_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d14f7876-892f-4a25-aa1f-0f7500be52cb',
          snapshotUrls: 'https://i.gkd.li/i/18368988',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18370963',
            'https://i.gkd.li/i/21383354',
            'https://i.gkd.li/i/23921822',
            'https://i.gkd.li/i/23922767',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[!(vid="welcome_ad_view_skip")] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/243c2920-9761-41c6-a142-9f6f53ab78fe',
          snapshotUrls: [
            'https://i.gkd.li/i/21383354',
            'https://i.gkd.li/i/23921822',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          matches: '@[desc="close_button"] - [text="|"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23922767',
        },
      ],
      order: -10,
    },
  ],
});
