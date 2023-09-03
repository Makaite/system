<template>
  <div class="layout">
    <top-content></top-content>
    <bottom-content></bottom-content>
  </div>
</template>

<script setup>
import TopContent from './TopContent/index.vue'
import BottomContent from './BottomContent/index.vue'

</script>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
</style>