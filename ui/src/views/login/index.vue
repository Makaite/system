<template>
  <div class="login">
    <!-- <my-message :message="message"></my-message> -->
    <div class="content">
      <div class="left">
        <left-content></left-content>
      </div>
      <div class="right">
        <right-content @message="messageEmit"></right-content>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import LeftContent from './componments/LeftContent.vue';
import RightContent from './componments/RightContent.vue';

let message = reactive({
  message:{}
})
const messageEmit = (info) => {
  message.message = {...info}
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('@/assets/img/login/login-bg.svg');
  background-repeat: no-repeat center;

  .content {
    width: 1220px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 1px 1px 15px 3px rgba(16,34,168,0.3);

    display: flex;
    align-items: center;

    .left{
      width: 584px;
      height: 100%;
      // background-color: rgba(#409EFF,0.6);
      // border-top-left-radius: 15px;
      // border-bottom-left-radius: 15px;
    }

    .right{
      flex: 1;
      height: 100%;
      // background-color: pink;
    }
  }
}
</style>