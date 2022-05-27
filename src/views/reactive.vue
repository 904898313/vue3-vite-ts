<template>
  <p>reactive</p>
  <p>num: {{ obj.num }}</p>
  <button @click="double()">double</button>
</template>
<script lang="ts">
import { reactive } from 'vue'
export default {
  setup() {
    var obj = reactive({
      num: 1
    })
    const double = () => {
      obj.num = obj.num * 2
    }
    return {
      obj,
      double
    }
  }
}
</script>