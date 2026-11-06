import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.oray.sunlogin',
  name: '向日葵远程控制',
  groups: [
    {
      key: -1,
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
          matches:
            '[vid="tobid_splash_skip_text" || vid="ms_skipView"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/f41b0367-9161-4329-987d-b2d0ad9ec233',
          snapshotUrls: [
            'https://i.gkd.li/i/17004919',
            'https://i.gkd.li/i/22056539',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22861457',
        },
        {
          key: 2,
          fastQuery: true,
          matches:
            '@View[clickable=true][childCount=0][visibleToUser=true] +(2,3) LinearLayout >2 [vid="sig_ad_privacy_ll"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22863334',
            'https://i.gkd.li/i/25626004',
          ],
        },
      ],
      order: -10,
    },
  ],
});
