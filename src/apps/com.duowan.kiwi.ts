import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '广告画面先出现,但节点最后才加载,故触发慢实属正常',
      fastQuery: true,
      forcedTime: 10000,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30792623',
            'https://i.gkd.li/i/30792625',
          ],
        },
        {
          key: 1,
          matches: '[visibleToUser=true][text*="跳过"][text.length<10]',
          snapshotUrls: [
            'https://i.gkd.li/i/30793734',
            'https://i.gkd.li/i/30794399',
          ],
        },
      ],
      order: -10,
    },
  ],
});
