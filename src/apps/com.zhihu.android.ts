import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      actionMaximumKey: 0,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          matches:
            '([vid="btn_skip"][visibleToUser=true]) || ([text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true])',
          exampleUrls: 'https://e.gkd.li/e129aaa6-bf4f-4455-9242-a6779667d814',
          snapshotUrls: [
            'https://i.gkd.li/i/18221451',
            'https://i.gkd.li/i/22714295',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/18221225',
            'https://i.gkd.li/i/23141429',
            'https://i.gkd.li/i/24229324',
          ],
        },
        {
          key: 1,
          matches:
            'TextView[width<114 && height<67] - @View[clickable=true][visibleToUser=true][width<135] <3 FrameLayout[childCount=4][getChild(1).getChild(0).childCount=3] <2 FrameLayout[childCount=2][getChild(0).width=0] < [vid="show_layout"]',
          snapshotUrls: [
            'https://i.gkd.li/i/30968922',
            'https://i.gkd.li/i/31332983',
          ],
        },
        {
          key: 2,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/30968922',
        },
      ],
      order: -10,
    },
  ],
});
