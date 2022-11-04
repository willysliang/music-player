import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import * as path from 'path'

/** 自定义组件name属性 */
import DefineOptions from 'unplugin-vue-define-options/vite'

// eslint
import eslintPlugin from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// mockjs
import { viteMockServe } from 'vite-plugin-mock'

import server from './config/vite/server'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  build: {
    // es2020 支持 import.meta 语法
    target: 'es2020',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    }
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@view': path.resolve(__dirname, 'src/views'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/api/module'),
      '@util': path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    DefineOptions(),
    /* eslint取消缓存 */
    eslintPlugin({
      cache: false, // 禁用 eslint 缓存
    }),
    /* eslint自动校检 */
    checker({
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,vue}"',
      },
    }),
    /* 配置 element-plus */
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /* 配置 mockjs */
    viteMockServe({
      mockPath: './mock',
      localEnabled: true,
      prodEnabled: false, // 实际开发请关闭，会影响打包体积
      // https://github.com/anncwb/vite-plugin-mock/issues/9
      injectCode: `
       import { setupProdMockServer } from './mock/_createProdMockServer';
       setupProdMockServer();
       `,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/var.scss";',
      },
    },
  },
  server,
})
