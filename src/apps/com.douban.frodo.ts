import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.douban.frodo',
  name: '豆瓣',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '⚠️[跳过]广告前可能有多次无效点击,属于正常现象',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 2,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200 && height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物" || text*="扭一扭"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15981630',
        },
        {
          key: 1,
          matches:
            '@[clickable=true] >2 [text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/26608409',
        },
        {
          key: 2,
          excludeMatches:
            '[text="去绑定邮箱" || text="历史"][visibleToUser=true]',
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/17687115',
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23283375',
            'https://i.gkd.li/i/29175754',
          ],
        },
        {
          key: 3,
          matches:
            '@View[width<170 && height<170] <3 FrameLayout <2 FrameLayout < [vid="sdk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/29440951',
            'https://i.gkd.li/i/34211578',
          ],
        },
        {
          key: 10,
          name: '点击坐标①',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.10',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/23283060',
          excludeSnapshotUrls: 'https://i.gkd.li/i/29440952',
        },
        {
          key: 11,
          preKeys: [10],
          name: '点击坐标②',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.135',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13575257',
            'https://i.gkd.li/i/18423724',
            'https://i.gkd.li/i/23982586',
            'https://i.gkd.li/i/23382528',
          ],
        },
        {
          key: 12,
          preKeys: [11],
          name: '点击坐标③',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.17',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13601755',
            'https://i.gkd.li/i/23324118',
            'https://i.gkd.li/i/23324139',
            'https://i.gkd.li/i/23652259',
            'https://i.gkd.li/i/24191638',
            'https://i.gkd.li/i/24362806',
          ],
        },
        {
          key: 13,
          preKeys: [12],
          name: '点击坐标④',
          position: {
            left: 'width * 0.875',
            top: 'width * 0.20',
          },
          anyMatches: [
            '[vid="ad_view"][visibleToUser=true][width>=720][childCount!=0]',
            '[vid="sdk_view"] >n [vid="animation_view"][visibleToUser=true][width>=720]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/16054268',
        },
        {
          key: 14,
          name: '点击坐标-无跳过节点',
          // 跳过按钮未暴露节点，skip 为全屏空 View；本机 7.136.0 快照未公开
          position: {
            left: 'width * 0.875',
            top: 'width * 0.17',
          },
          matches: [
            '[vid="ad_mark"][visibleToUser=true]',
            '[vid="ad_parent"] > View[vid="skip"][childCount=0][visibleToUser=true][width>=720]',
          ],
        },
      ],
      order: -10,
    },
  ],
});
