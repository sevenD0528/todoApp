<template>
  <div id="app">
    <todoHeader></todoHeader>
    <router-view></router-view>
    <todoFooter></todoFooter>
  </div>
</template>

<script>
import todoHeader from '@/components/header/header'
import todoFooter from '@/components/footer/footer'
export default {
  name: 'App',
  components: {
    todoHeader,
    todoFooter
  }
}
</script>

<style>
@import "./style/common.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
