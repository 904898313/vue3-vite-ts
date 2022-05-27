<template>
    <div id="nav">
      <router-link to="/recursion">递归组件</router-link> |
      <router-link to="/componentIs">动态组件</router-link> |
      <router-link to="/ref">ref</router-link> |
      <router-link to="/reactive">reactive</router-link> |
      <router-link to="/HookFunction">HookFunction</router-link> |
      <router-link to="/countdown">倒计时</router-link> |
      <router-link to="/watch">watch</router-link>
    </div>
    <router-view/>
</template>
<script lang="ts">
</script>
<style>
@import "./assets/style/main.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

#nav {
  padding: 20px;

}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  line-height: 100%;
}
.router-link-active {
  color: #42b983!important;
}
</style>
