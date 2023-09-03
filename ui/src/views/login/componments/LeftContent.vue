<template>
  <div class="left-content" :class="user.isRegister?'is-register':''">
    <div class="rtMove">
      <img class="tuB" src="@/assets/img/login/tuB.png" />
      <img class="guangA" src="@/assets/img/login/guang.png" />
      <img class="guangB" src="@/assets/img/login/guang.png" />
      <img class="tuC" src="@/assets/img/login/tuC.png" />

      <img class="lingxA" src="@/assets/img/login/lingxA.png" />
      <img class="lingxB" src="@/assets/img/login/lingxB.png" />
      <img class="lingxC" src="@/assets/img/login/lingxC.png" />
      <img class="lingxD" src="@/assets/img/login/lingxD.png" />
      <img class="lingxE" src="@/assets/img/login/lingxE.png" />
      <img class="lingxF" src="@/assets/img/login/lingxF.png" />

      <img class="chaunB" src="@/assets/img/login/chaunB.png" />
      <img class="chaunC" src="@/assets/img/login/chaunB.png" />
      <img class="tuA" src="@/assets/img/login/tuA.png" />
      <img class="tuAa" src="@/assets/img/login/tuA.png" />

      <!-- <img class="ziA" src="@/assets/img/login/ziA.png" />
      <img class="ziB" src="@/assets/img/login/ziB.png" />
      <img class="ziC" src="@/assets/img/login/ziC.png" /> -->
      <div class="ziC text">MA</div>
      <div class="ziA text">KAI</div>
      <div class="ziB text">TE</div>

      <img class="ma tuAn" src="@/assets/img/login/tuAn.png" />
      <img class="ma tuMing" src="@/assets/img/login/tuMing.png" />

      <img class="ren" src="@/assets/img/login/ren.png" />
    </div>
  </div>
</template>

<script setup>
import { userStore } from '../../../pinia';

const user = userStore()
</script>

<style lang="scss" scoped>
.left-content{
  position: relative;

  width: 584px;
  height: 100%;
  background-color: #8cc5ff;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  z-index: 3;
  
  .rtMove{
    width: 444px;
    height: 430px;
    background-image: url('@/assets/img/login/banner.png');
    background-position: center bottom;
    background-repeat: no-repeat;

    position: absolute;
    top: 100px;
    left: 70px;

    .tuB {
      position: absolute;
      top:123px;
      left:111px;
      animation: tuB 2s linear infinite;
    }
    
    .guangA{
      position: absolute;
      top:309px;
      left:279px;
      animation: guangA 1.3s linear infinite;
    }

    .guangB {
      position: absolute;
      top: 263px;
      left: 239px;
      animation: guangB 1.1s linear infinite;
    }

    .tuC {
      position: absolute;
      top: 228px;
      left: 168px;
      opacity: 1;
      animation: tuC 1.6s linear infinite;
    }

    .lingxA {
      position: absolute;
      top: 194px;
      left: 126px;
      opacity: 1;
      animation: lingxA 2s linear infinite;
    }

    .lingxB {
      position: absolute;
      top: 163px;
      left: 79px;
      opacity: 1;
      animation: lingxB 2.2s linear infinite;
    }

    .lingxC {
      position: absolute;
      top: 179px;
      left: 189px;
      opacity: 1;
      animation: lingxC 1.7s linear infinite;
    }

    .lingxD {
      position: absolute;
      top: 103px;
      left: 160px;
      opacity: 1;
      animation: lingxC 2.7s linear infinite;
    }

    .lingxE {
      position: absolute;
      top: 104px;
      left: 95px;
      opacity: 1;
      animation: lingxB 1.2s linear infinite;
    }

    .lingxF {
      position: absolute;
      top: 84px;
      left: 114px;
      opacity: 1;
      animation: lingxA 1.4s linear infinite;
    }

    .chaunB {
      position: absolute;
      top:38px;
      left: 318px;
      animation: chaunB 1.2s linear infinite;
    }

    .chaunC {
      position: absolute;
      top:60px;
      left: 318px;
      animation: chaunC 0.7s linear infinite;
    }

    .tuA {
      position: absolute;
      top: 140px;
      left: 316px;
      animation: tuA 1.3s linear infinite;
    }

    .tuAa {
      position: absolute;
      top: 140px;
      left: 316px;
      animation: tuAa 1.3s linear infinite;
    }

    .ziA {
      position: absolute;
      top: 114px;
      left: 320px;
      animation: ziA 2.6s linear infinite;
    }

    .ziB {
      position: absolute;
      top: 144px;
      left: 339px;
      animation: ziB 2s linear infinite;
    }

    .ziC {
      position: absolute;
      top: 91px;
      left: 349px;
      animation: ziC 1.7s linear infinite;
    }

    .text {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      transform: rotateY(-180deg);
    }

    .ma {
      position: absolute;
      top: 247px;
      left: 303px;
    }

    .tuMing {
      opacity: 0;
      animation: tuMing 0.6s linear infinite;
    }

    .ren {
      position: absolute;
      top: 283px;
      left: 330px;
    }
  }
}

.is-register {
  z-index: 9;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  animation: is-register 1s ease forwards;
}

.is-register1 {
  z-index: 9;
  animation: is-register 1s ease reverse forwards;
}

@keyframes is-register {
  100% {
    transform: translateX(636px);
  }
}

@keyframes tuB {
  0% {
    transform: translateY(0);
  }

  50%{
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0);
  }
}


@keyframes guangA{
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translate(-55px, -34px);
  }
}

@keyframes guangB{
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translate(60px, 33px);
  }
}

@keyframes tuC{
  0%{
    opacity: 0;
    transform: translate(0,0);
  }
 
  40%{
    opacity: 1;
  }
  90%,
  100%{
    opacity: 1;
    transform: translate(40px, 20px);
  }
}

@keyframes lingxA{
  0%{
    opacity: 1;
    transform: translateY(-8px);
  }
  60% {
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(-60px);
  }
}

@keyframes lingxB{
  0%{
    opacity: 1;
    transform: translateY(-8px);
  }
  
  40%{
    opacity: 1;
  }

  90%,100%{
    opacity: 0;
    transform: translateY(-60px);
  }
}

@keyframes lingxC{
  0%{
    opacity: 1;
    transform: translateY(-8px);
  }
  
  50%{
    opacity: 1;
  }

  50%,100%{
    opacity: 0;
    transform: translateY(-50px);
  }
}

@keyframes chaunB{
  0%{
    opacity: 1;
    transform: translateY(0px);
  }
  

  100%{
    opacity: 0;
    transform: translateY(-70px);
  }
}

@keyframes chaunC{
  0%{
    opacity: 1;
    transform: translateY(0px);
  }

  100%{
    opacity: 0;
    transform: translateY(-40px);
  }
}

@keyframes tuA{
  0%{
    opacity: 1;
    transform: translateY(0px);
  }
 
  60%{
    opacity: 1;
  }

  100%{
    opacity: 0;
    transform: translateY(-120px);
  }
}

@keyframes tuAa{
  0%, 30%{
    opacity: 1;
    transform: translateY(0px);
  }
  60%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translateY(-60px);
  }
}

@keyframes ziA{
  0%, 20%, 40%, 60%, 80% {
    transform: translateY(0);
  }
  10%, 50% {
      transform: translateY(-4px);
  }
  30%, 70% {
      transform: translateY(4px);
  }
}

@keyframes ziB{
  0%, 20%, 40%, 60%, 80% {
    transform: translateY(0);
  }
  10%, 50% {
      transform: translateY(3px);
  }
  30%, 70% {
      transform: translateY(-3px);
  }
}

@keyframes ziC{
  0%, 20%, 40%, 60%, 80% {
    transform: translateY(0);
  }
  10%, 50% {
      transform: translateY(-2px);
  }
  30%, 70% {
      transform: translateY(3px);
  }
}

@keyframes tuMing{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>