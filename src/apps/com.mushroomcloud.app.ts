import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.mushroomcloud.app',
  name: '蘑菇云手机',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@View[clickable=true][width<150 && height<150] - FrameLayout[childCount=3][getChild(2).name$="TextView"] >(n+5) [text*="三方应用" || text*="扭动手机" || text*="上滑" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/34136348',
            'https://i.gkd.li/i/34367435',
          ],
        },
      ],
      order: -10,
    },
  ],
});
