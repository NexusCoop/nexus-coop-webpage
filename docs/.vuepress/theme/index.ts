import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export const nexusTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-nexus',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
      CommanderLayout: path.resolve(__dirname, 'layouts/CommanderLayout.vue'),
    },
  }
}