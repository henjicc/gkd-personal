import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1874130597,
  name: '自用开屏订阅',
  version: 1,
  author: 'henjicc',
  updateUrl:
    'https://raw.githubusercontent.com/henjicc/gkd-personal/main/dist/gkd.json5',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/henjicc/gkd-personal',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
