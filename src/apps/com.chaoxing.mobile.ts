import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.chaoxing.mobile',
  name: '学习通',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      matchRoot: true,
      rules: [
        {
          fastQuery: true,
          activityIds: '.activity.SplashActivity',
          matches: '@[clickable=true] > [text^="跳过"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26644070',
          exampleUrls: 'https://e.gkd.li/42ea0ef8-e1c6-43e8-8f48-971439c19d58',
        },
      ],
      order: -10,
    },
  ],
});
