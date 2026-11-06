import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.wallstreetcn.news',
  name: '华尔街见闻',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '@[vid="iv_jump_parent" || vid="iv_jump"] -2 [text="广告"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7',
          snapshotUrls: [
            'https://i.gkd.li/i/14525329',
            'https://i.gkd.li/i/20430632',
          ],
        },
      ],
      order: -10,
    },
  ],
});
