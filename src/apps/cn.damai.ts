import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '该规则需要在高级设置中开启[启用优化]才能生效',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      forcedTime: 8000,
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          matches: '[vid="homepage_advert_pb"]',
          snapshotUrls: 'https://i.gkd.li/i/14585402',
          exampleUrls:
            'https://m.gkd.li/57941037/6680a0b8-0796-4165-88fc-1f16cd6c67dd',
        },
      ],
      order: -10,
    },
  ],
});
