<template>
  <div class="nav-bar">
    <div class="nav-item" :class="activeNav === index ? 'nav-item-avtive' : ''" v-for="(item, index) in navList"
      :key="index" @click="navItemClick(index)">
      <div class="nav-name">{{ item.name }}</div>
      <div class="img" v-show="computed"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const navList = [
  {
    name: '页面一'
  },
  {
    name: '页面二十'
  }
]
let activeNavIndex = ref(0)

let activeNav = computed(() => {
  return activeNavIndex.value
})

const navItemClick = (index) => {
  activeNavIndex.value = index
}
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 34px;
  background-color: #FAFAFA;
  line-height: 34px;

  .nav-item {
    height: 24px;
    display: inline-flex;
    align-items: center;
    margin-left: 8px;
    border-radius: 3px;
    background-color: #EEEEEE;
    padding: 0 8px;
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;

    // .nav-name{
    // font-size: 12px;
    // font-weight: 300;
    // color: rgba(0, 0, 0, 0.6);
    // }
    img {
      width: 16px;
      height: 16px;
      margin-left: 8px;

      &:hover {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.3);
        ;
      }
    }

    .img {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      background-image: url('@/assets/svg/close.svg');

      &:hover {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.3);
        background-image: url('@/assets/svg/close1.svg');
      }
    }
  }

  .nav-item-avtive {
    border: 1.5px solid #A3C6FF;
    background: #ECF2FE;
    color: #1E75FE;
  }
}</style>