import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.shanxiang.wangxiao',
  name: '山香网校',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches:
            '[vid="iv_advertising"] + [vid="countDownView"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26356382',
        },
      ],
      order: -10,
    },
  ],
});
