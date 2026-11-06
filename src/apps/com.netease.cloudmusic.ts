import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.netease.cloudmusic',
  name: '网易云音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.music.biz.setting.activity.SettingActivity',
            '.music.biz.search.activity.SearchActivity',
            '.music.biz.rn.activity.BgMainProcessRNActivity',
          ],
          matches:
            '[text*="跳过" || text*="Skip"][text.length<10][width<500 && height<200][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/30857148',
            'https://i.gkd.li/i/30857149',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15092814',
            'https://i.gkd.li/i/16318423',
            'https://i.gkd.li/i/30857162',
          ],
        },
      ],
      order: -10,
    },
    {
      // 2026-11-07 按用户要求从 Lin-arm/GKD_subscription main 原样迁入
      key: 4,
      name: '全屏广告-弹窗广告',
      fastQuery: true,
      rules: [
        {
          key: 1,
          action: 'back',
          activityIds: [
            '.activity.MainActivity',
            '.activity.PlayerActivity',
            '.music.biz.rn.activity.LayerReactNativeActivity',
            '.music.biz.comment.activity.CommentActivity',
          ],
          excludeMatches:
            '[text="当前场景" || vid="mainDrawerContainer"][visibleToUser=true]',
          matches:
            '[vid="dsl_dialog_root" || text^="邀您开通VIP" || text^="本周已免费试听" || text^="免费听模式体验中" || text^="续费后，即可畅听" || text*="小组件到桌面" || text$="开通VIP畅听"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13804534', // [vid="dsl_dialog_root"]
            'https://i.gkd.li/i/13848913',
            'https://i.gkd.li/i/13962214',
            'https://i.gkd.li/i/14036940',
            'https://i.gkd.li/i/15047126',
            'https://i.gkd.li/i/15125892',
            'https://i.gkd.li/i/15244091',
            'https://i.gkd.li/i/23770986',
            'https://i.gkd.li/i/20097535', // 免费听模式体验中
            'https://i.gkd.li/i/20097609', // 本周已免费试听
            'https://i.gkd.li/i/20115012', // 邀您开通VIP，畅享千万级会员曲库
            'https://i.gkd.li/i/22451511', // 续费后，即可畅听TA们的歌
            'https://i.gkd.li/i/23770978', // 添加「乐评日历」小组件到桌面
            'https://i.gkd.li/i/27080453', // 含334首VIP歌曲，开通VIP畅听
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/15404777',
            'https://i.gkd.li/i/20115204',
            'https://i.gkd.li/i/20159204',
            'https://i.gkd.li/i/24157914',
          ],
        },
      ],
    },
  ],
});
