<template>
  <h1>递归组件{{ num }}</h1>
  <recursion :num="num + 1" v-if="num<4"/>
</template>

<script lang="ts">
export default ({
  props:{
    num: {
      type: Number,
      default: 1
    }
  }
})

</script>

<style scoped>
</style>
