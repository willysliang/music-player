// shims-vue.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import VueRouter, { Route } from 'vue-router'
// import { Store } from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    // $store: Store<unknown>
    // 以下是在main.ts中挂载到Vue.prototype上的变量
    $api: unknown
    $mock: unknown
    $configs: unknown
  }
}
