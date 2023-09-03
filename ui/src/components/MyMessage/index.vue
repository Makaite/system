<template>
  <div class="my-message" ref="messageRef" :class="show?'my-message-1':''" v-show="show">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

let props = defineProps({
  message: Object
})
const messageRef = ref()
let message = ref('')
let show = ref(false)

watch(() =>props.message,(newValue, oldValue) => {
  show.value = true
  message.value = newValue.message.message
  if(newValue.message.type == 'success') {
    messageRef.value.style.backgroundColor = '#67C23A'
  }else if(newValue.message.type == 'error') {
    messageRef.value.style.backgroundColor = '#F56C6C'
    setTimeout(() => {
      show.value = false
    }, 3000);
  }
},{
  deep: true,
  // immediate: true
})
</script>

<style lang="scss" scoped>
.my-message {
  width: 300px;
  height: 30px;
  background-color: #67C23A;

  position: fixed;
  top: 30px;

  border-radius: 3px;
  box-shadow: 1px 1px 3px 3px #bfbfbf;
  text-align: center;
  line-height: 30px;
  
  .message {
    color: #fff;
    font-size: 14px;
  }
}

.my-message-1 {
  animation: show 0.7s ease forwards;
}

.my-message-2 {
  animation: not-show 1s ease forwards;
}

@keyframes show {
  0% {
    transform: translateY(-70px);
  }
  100% {
    transform: translateY(30px);
  }
}

@keyframes not-show {
  0% {
    transform: translateY(30px);
  }
  // 80% {
  //   transform: translateY(0px);
  //   opacity: 0;
  // }
  100% {
    transform: translateY(-70px);
  }
}
</style>