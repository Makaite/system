<template>
  <div class="right-content">
    <nav-bar></nav-bar>
    <main-content></main-content>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar/index.vue'
import MainContent from './components/MainContent/index.vue'

</script>

<style lang="scss" scoped>
.right-content{
  width: 100%;
  height: 100%;
  flex: 1;
  
  display: flex;
  flex-direction: column;
}
</style>