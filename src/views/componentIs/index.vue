<template>
  <button @click="change">动态组件切换</button><br/>
  <input type="number" v-model="myTitle">
  <component :is='bool ? "component1": "component2"' v-model:title="myTitle"></component>
</template>
<script lang="ts">
import component1 from './component/component1.vue'
import component2 from './component/component2.vue'
import { ref } from 'vue'
export default ({
  components: {
    component1,
    component2
  },
  setup() {
    const myTitle = ref(1)
    const bool = ref(true);
    const change = () => {
      bool.value = !bool.value;
    }
    return {
      bool,
      change,
      myTitle
    }
  }
})
</script>
<style>

</style>