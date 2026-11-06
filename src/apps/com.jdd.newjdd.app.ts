import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jdd.newjdd.app',
  name: '匠多多师傅版',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches: '[vid="jump"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/10dd2d8b-e48a-4554-a748-c9e156b003d9',
          snapshotUrls: 'https://i.gkd.li/i/23294048',
        },
      ],
      order: -10,
    },
  ],
});
