import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
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
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/16323111',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
        {
          key: 1,
          excludeActivityIds: 'com.jd.lib.search.view.Activity.SearchActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17602356',
          excludeSnapshotUrls: 'https://i.gkd.li/i/16323115',
        },
      ],
      order: -10,
    },
  ],
});
