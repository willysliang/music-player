/**
 * @ Author: willysliang
 * @ Create Time: 2022-10-26 16:53:02
 * @ Modified by: willysliang
 * @ Modified time: 2022-10-26 17:35:10
 * @ Description: vue-i18n 配置国际化多语言
 */

import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { useAppStoreWithOut } from '@store/app'

/** 国际化容器的配置项 */
async function createI18nOptions () {
  const appStore = useAppStoreWithOut()
  const locale = appStore.localeType
  const defaultLocal = await import(`./lang/${locale}.ts`);

  return {
    locale,
    defaultLocal,
  }
}

const options = await createI18nOptions()
const i18n = createI18n(options)

/** 把国际化实例挂载到 app 上 */
export async function setupI18n (app: App) {
  console.log("option", options);
  app.use(i18n)
}
