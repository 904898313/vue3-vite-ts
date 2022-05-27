<template>
  vue3钩子函数
  <button @click="dataChange">data change</button>
</template>
<script>
import { onMounted, onBeforeUpdate, onUpdated, ref, onBeforeUnmount, onUnmounted } from "vue"
export default {
  setup() {
    onMounted(() => {
      console.log('onMounted=>DOM挂载完毕')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate=>数据更新前')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount=>数据更新前')
    })
    onUpdated(() => {
      console.log('onUpdated=>数据更新后')
    })
    const num = ref(0)
    const dataChange = () => {
      num.value++
    }
    return {
      dataChange
    }
  }
}
</script>
<style>
  
</style>