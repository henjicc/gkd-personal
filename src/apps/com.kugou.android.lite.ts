import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.kugou.android.lite',
  name: '酷狗概念版',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          action: 'clickCenter',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/94c7fc27-891f-4206-b933-f26661041b99',
          snapshotUrls: 'https://i.gkd.li/i/21451911',
        },
        {
          key: 1,
          matches: '[desc*="跳过"][desc.length<10][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/7aa8bc5b-e14c-4cef-9eae-b89aac8ef459',
          snapshotUrls: 'https://i.gkd.li/i/21750055',
        },
      ],
      order: -10,
    },
  ],
});
