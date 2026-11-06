import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.qc.mycomic',
  name: 'MyComic',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      priorityTime: 10000,
      rules: [
        {
          matches:
            '@[clickable=true] > [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15443225',
        },
      ],
      order: -10,
    },
  ],
});
