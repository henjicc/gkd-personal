import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
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
          excludeActivityIds: [
            'com.xingin.alioth.search.GlobalSearchActivity',
            'com.xingin.growth.ob.FloatingObPageActivity',
            'com.xingin.matrix.notedetail.NoteDetailActivity',
            'com.xingin.matrix.detail.activity.DetailFeedActivity',
          ],
          excludeMatches:
            '[text="首页" || text="选择兴趣推荐更精准" || text="相关搜索"][visibleToUser=true]',
          matches:
            '[text*="跳过" || text^="Skip Ad"][text.length<10][!(vid="tv_user_name")][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9733ada7-4961-4a9f-b48d-3398ecd05508',
          snapshotUrls: [
            'https://i.gkd.li/i/17452158',
            'https://i.gkd.li/i/22951606',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/19035037',
            'https://i.gkd.li/i/20585457',
            'https://i.gkd.li/i/21937254',
            'https://i.gkd.li/i/28885475',
          ],
        },
        {
          key: 1,
          matches: '[vid="splash_count_down_view"]',
          exampleUrls: 'https://e.gkd.li/6ed22307-ce1d-479e-8a8d-a6fe4ffa614c',
          snapshotUrls: [
            'https://i.gkd.li/i/17109105',
            'https://i.gkd.li/i/17108010',
          ],
        },
      ],
      order: -10,
    },
  ],
});
