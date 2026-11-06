import { defineGkdApp } from '@gkd-kit/define';

// 上游无此应用，2026-11-07 按本机快照新增，来源和验证见 README.md。
export default defineGkdApp({
  id: 'com.yaya.zone',
  name: '叮咚买菜',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页弹窗',
      desc: '首页网页弹窗出现时返回关闭',
      fastQuery: true,
      activityIds: '.home.HomeActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          // 弹窗内容每次不同，只认弹窗窗口的全屏网页容器；用户实测返回可关闭
          action: 'back',
          matches:
            '[vid="fl_container"][depth=3] > [vid="webContainer"][width>=1000 && height>=2000] > FrameLayout > WebView[visibleToUser=true]',
        },
      ],
    },
  ],
});
