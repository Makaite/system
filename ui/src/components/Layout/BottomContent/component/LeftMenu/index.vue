<template>
  <div class="left-menu">
    <t-menu expandMutex>
      <t-menu-item value="0" @click="homeClick">
        <template #icon>
          <!-- <t-icon name="home" /> -->
          <img :src="home" alt="" srcset="">
        </template>
        
        首页
      </t-menu-item>

      <template v-for="(oneClass, oneClassIndex) in menuList" :key="oneClassIndex">
        <t-submenu :value="oneClassIndex" :title="oneClass.name">
          <template #icon>
            <!-- <t-icon :name="oneClass.icon" /> -->
            <img :src="home" alt="" srcset="">
          </template>
          
          <template v-for="(twoClass, twoClassIndex) in oneClass.children" :key="twoClassIndex">
            <t-menu-item :value="oneClassIndex + '-' + twoClassIndex" @click="twoClassClick(twoClass)">
              <span>{{ twoClass.name }}</span>
            </t-menu-item>
          </template>
        </t-submenu>
      </template>
    </t-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import home from '@/assets/svg/home.svg'
const router = useRouter()
let menuList = [{
  name: '主要内容',
  icon: 'home',
  children: [
    {
      name: 'Echarts',
      path: '/echarts'
    },{
      name: 'Antv x6',
      path: '/antv-x6' 
    }
  ]
}]

//首页路由
const homeClick = () => {
  router.push('/home')
}
//二级菜单点击事件
const twoClassClick = (menuitem) => {
  router.push(menuitem.path)
}

</script>

<style lang="scss" scoped>
.left-menu {
  min-width: 196px;
  height: 100%;
  background-color: skyblue;
  box-shadow: 0px 9px 10px 3px #B3B3B3;

  :deep(.t-default-menu) {
    width: 196px !important;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}
</style>