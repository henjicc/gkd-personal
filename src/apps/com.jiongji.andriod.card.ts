import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jiongji.andriod.card',
  name: '百词斩',
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
          excludeActivityIds:
            'com.baicizhan.client.business.webview.ui.BczWebActivity',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/8612bbae-7a50-4730-8071-1c47e35c27ca',
          snapshotUrls: 'https://i.gkd.li/i/21705324',
          excludeSnapshotUrls: 'https://i.gkd.li/i/21705338',
        },
      ],
      order: -10,
    },
  ],
});
