<template>
  <div class="main-content">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-content{
  height: 100%;
  flex: 1;
  padding:8px;
  background-color: #f0f0f0;
  box-shadow: 0px 4px 10px 3px #F0F0F0;
  .content{
    height: 100%;
    border-radius: 4px;
    background-color: #fff;
  }
}
</style>