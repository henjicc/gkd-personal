import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.huawei.android.totemweather',
  name: '华为天气',
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
          action: 'clickCenter',
          matches: '[id="com.huawei.hms.ads.uiengine:id/hiad_skip_text"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12928975',
            'https://i.gkd.li/i/13226636',
          ],
        },
      ],
      order: -10,
    },
  ],
});
