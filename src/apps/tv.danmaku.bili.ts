import { defineGkdApp } from '@gkd-kit/define';

// 来源和本机验证记录：SOURCES.md。只处理开屏，不匹配首页广告。
export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      enable: true,
      fastQuery: true,
      matchRoot: true,
      actionMaximum: 2,
      priorityTime: 10000,
      order: -10,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: '[vid="count_down" || vid="skip"][visibleToUser=true]',
          // 本机节点点击会返回成功但可能无效，改为实际触屏点击。
          action: 'clickCenter',
          actionCd: 500,
          snapshotUrls: [
            'https://i.gkd.li/i/16187624',
            'https://i.gkd.li/i/16484445',
          ],
        },
      ],
    },
  ],
});
