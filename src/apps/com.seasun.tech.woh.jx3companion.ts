import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.seasun.tech.woh.jx3companion',
  name: '推栏',
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
          fastQuery: true,
          matches:
            '@[clickable=true] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/3314ff0b-9218-4712-9ae9-b820029e356a',
          snapshotUrls: 'https://i.gkd.li/i/18730361',
        },
      ],
      order: -10,
    },
  ],
});
