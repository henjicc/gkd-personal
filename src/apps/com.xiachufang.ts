import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.xiachufang',
  name: '下厨房',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[vid="skip_container"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/5f3509d5-0b0b-4d79-b0e6-275a591ef2f5',
          snapshotUrls: 'https://i.gkd.li/i/18587428',
        },
        {
          key: 1,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19724417',
        },
        {
          key: 2,
          matches:
            '@[text.length<10][text*="跳过"] + * > [text*="跳转"][text$="第三方应用"]',
          snapshotUrls: 'https://i.gkd.li/i/19724959',
          exampleUrls: 'https://e.gkd.li/5c6579f4-77bb-4970-851f-087c2f86d6ad',
        },
        {
          key: 3,
          matches:
            '@View[clickable=true][width<135 && height<135] <3 FrameLayout <2 FrameLayout < [vid="ad_container"]',
          snapshotUrls: 'https://i.gkd.li/i/27316377',
          exampleUrls: 'https://e.gkd.li/e7a1e2b1-5694-40cf-9db4-68983de45a9a',
        },
      ],
      order: -10,
    },
  ],
});
