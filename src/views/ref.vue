<template>
  <h1>test</h1>
  {{ num }}
  <button @click="add">+</button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const num = ref(0);
    console.log("num", num)
    const add = () => {
      num.value++;
    };
    return {
      num,
      add,
    };
  }
  // 问题：为什么setup要把变量封装成对象用object.value的方式访问呢
  // js中基本数据类型的传递为值传递，传递后的值互不影响，所以在传递的过程中可能会失去它的响应性。
  // 列:
  // var a = 1; var b = a; b = 2; a:1,b:2
  // a的值传递给b的时候是把1传过去了，b改变时不影响a 
  // var obj1 = {a:1}; var obj2 = obj1; obj2.a = 2; obj1.a:2,obj2.a:2
  // 对象值的传递时是引用传递，可以理解为这个值所在房间的钥匙，obj1和obj2拿的同一把钥匙，而值只有一个，所以引用数据类型的改变会所有引用该值的地方。
  // 为了不改变响应性，统一使用引用传递，封装为对象。
};
</script>
<style>
</style>  