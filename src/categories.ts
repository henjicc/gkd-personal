import { defineGkdCategories } from '@gkd-kit/define';

export default defineGkdCategories([
  {
    key: 0,
    name: '开屏广告',
    enable: true,
  },
  {
    // 与上游 key 相同；只收录用户实测要求关闭的弹窗，默认开启
    key: 7,
    name: '全屏广告',
    enable: true,
  },
]);
