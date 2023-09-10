<template>
  <div class="logo-info">
    <div class="logo">MKT</div>
    <div class="title">SYSTEM 1.0.0</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.logo-info{
  // background-color: blue;
  height: 100%;

  display: flex;
  align-items: center;

  font-weight: 600;

  margin-left: 22px;

  .logo{
    width: 35px;
    height: 35px;
    border-radius: 6px;
    background-color: #1E75FE;

    color: #fff;
    font-size: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 12px;
  }

  .title{
    font-size: 24px;
    color: #1E75FE;
  }
}
</style>