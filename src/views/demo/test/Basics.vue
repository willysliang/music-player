<!--
 * @ Author: willysliang
 * @ Create Time: 2022-10-31 17:15:11
 * @ Modified by: willysliang
 * @ Modified time: 2022-12-05 16:47:58
 * @ Description: 测试组件
 -->

<script lang="tsx">
import { createVNode, defineComponent, h } from 'vue'
import { avactor } from '@/assets/images'

export default defineComponent({
  name: 'Basics',
  props: {
    text: { type: String, default: 'default' },
  },
  render (props) {
    return h('div', { id: 'app' }, [
      h('img', { src: avactor, class: 'w-20 h-20' }),
      createVNode('h1', { class: 'hello' }, 'HelloWorld'),
      createVNode('h1', { class: 'hello' }, props.text),
    ])
  },
})
</script>
