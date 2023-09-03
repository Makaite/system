<template>
  <div class="bottom-content">
    <left-menu></left-menu>
    <right-content></right-content>
  </div>
</template>

<script setup>
import LeftMenu from './component/LeftMenu/index.vue'
import RightContent from './component/RightContent/index.vue'

</script>

<style lang="scss" scoped>
.bottom-content{
  width: 100%;
  height: 100%;
  flex: 1;

  display: flex;
}
</style>