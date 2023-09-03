<template>
  <div  class="top-content">
    <logo-info></logo-info>
    <login-info></login-info>
  </div>
</template>

<script setup>
import LogoInfo from './components/LogoInfo/index.vue'
import LoginInfo from './components/LoginInfo/index.vue'
</script>

<style lang="scss" scoped>
.top-content{
  width: 100%;
  height: 56px;
  background-color: red;

  padding-left: 22px;

  position: relative;
  
  display: flex;
}
</style>