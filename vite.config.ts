import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// eslint
import eslintPlugin from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// mockjs
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
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
      mockPath: "./mock/"
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/styles/var.scss";',
      },
    },
  },
  server: {
    port: 8080, // 启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
