<template>
  watchEffect
  <input type="text" v-model="person.id">
  {{person}}
</template>
<script>
import { watch, watchEffect, reactive, onMounted } from 'vue';
import _ from 'lodash'
export default {
  setup() {
    const person = reactive({
      id: 904,
      data: {
        name: '',
        age: 22
      }
    });
    const stop = watch(
      () => _.cloneDeep(person),
      (now, old) => {
        console.log('now:', now, 'old:', old)
        setTimeout(() => {
          stop();
        }, 10000)
      },
      {
        deep: true,
        immediate: true
      }
    )
    const watchEffectStop = watchEffect(() => {
      console.log(person.data.age, 'watchEffect')
    })
    onMounted(() => {
      setTimeout(() => {
        watchEffectStop();
      }, 1000000000)
    })
    return {
      person
    }
  }
}
</script>
<style lang="">
  
</style>