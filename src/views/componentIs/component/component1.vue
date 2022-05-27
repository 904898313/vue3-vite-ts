<template>
  组件1
  <br>
  props: {{title}}
  <br>
  <button @click="changeProps">props双向绑定</button>
</template>
<script lang="ts">
export default {
  props: {
    title: Number
  },
  setup(props, context) {
    const changeProps = () => {
      context.emit('update:title', 1111111)
    }
    return {
      changeProps
    }
  }
}
</script>