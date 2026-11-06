import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.sohu.inputmethod.sogou',
  name: '搜狗输入法',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '@[clickable=true] > [text="跳过"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b',
          snapshotUrls: 'https://i.gkd.li/i/20138053',
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@[clickable=true][text^="跳过"] - [text="广告"][text.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/aa7e78f0-0cfe-490d-8d41-f3e41b906610',
          snapshotUrls: 'https://i.gkd.li/i/25897923',
        },
      ],
      order: -10,
    },
  ],
});
