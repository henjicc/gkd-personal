import { defineGkdApp } from '@gkd-kit/define';

// 上游无此应用，2026-11-07 按本机快照新增，来源和验证见 README.md。
export default defineGkdApp({
  id: 'com.yaya.zone',
  name: '叮咚买菜',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页弹窗',
      desc: '点击网页弹窗底部的关闭按钮',
      fastQuery: true,
      activityIds: '.home.HomeActivity',
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          // 网页内关闭按钮不可点击，直接触屏点击中心
          action: 'clickCenter',
          matches:
            '[vid="webContainer"] >n View[childCount=2] > View[index=0][childCount>=3] + View[index=1][childCount=1][width<150 && height<150] > Image[childCount=0][visibleToUser=true]',
        },
      ],
    },
  ],
});
