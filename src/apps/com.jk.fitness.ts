import { defineGkdApp } from '@gkd-kit/define';

// 开屏基线来自 Lin-arm/GKD_subscription v626，来源和本地修改见 README.md。
export default defineGkdApp({
  id: 'com.jk.fitness',
  name: '食卡卡',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '子key2会点击假的[跳过]按钮进入广告,需配合下一条规则使用',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          matches:
            '[text*="跳过"][text.length<10][width<500 && height<300][visibleToUser=true]',
        },
        {
          key: 1,
          matches:
            '@ImageView < [width<137 && height<137] < [visibleToUser=true] +n ViewGroup >2 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/28437892',
            'https://i.gkd.li/i/28447272',
          ],
        },
        {
          key: 2,
          matches:
            'TextView - @View[id=null][text=null][desc=null][clickable=true][width<148 && height<148] <3 FrameLayout[childCount=4] <<n [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/28448877',
        },
      ],
      order: -10,
    },
  ],
});
