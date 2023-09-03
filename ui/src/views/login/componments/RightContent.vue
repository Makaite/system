<template>
  <div class="right-content" :class="user.isRegister?'to-register':''">
    <div class="welcome-my" v-if="!user.isRegister">
      <div class="welcome">WELCOME</div>
      <div class="to">to</div>
      <div class="my">My System</div>
      <div class="ma">（About Ma Kaite）</div>
    </div>
    <div class="welcome-my" v-else>
      <div class="welcome">REGISTER</div>
      <div class="to">|</div>
      <div class="my">注册</div>
    </div>
    <div class="login-content">
      <div class="name">login name</div>
      <input type="text" class="name-inp" placeholder="Login Name" v-model="loginInfo.username">
      <div class="password">password</div>
      <input type="password" class="password-inp" placeholder="Password" v-model="loginInfo.password">
      <button class="login-btn" @click="login('login')" v-if="!user.isRegister">登录</button>
      <button class="login-btn" @click="login('register')" v-else>注册</button>
      <div class="operate" :class="user.isRegister?'operate1':''">
        <div class="remember" v-show="!user.isRegister">
          <input type="checkbox" id="is-remember">
          <label for="is-remember" class="remember-text">记住密码</label>
        </div>
        <a href="#" @click="toRegister('register')" v-show="!user.isRegister">去注册</a>
        <a href="#" @click="toRegister('login')" v-show="user.isRegister">去登录</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue';
import { userStore } from '../../../pinia';
import { useRouter } from 'vue-router';
import { registerApi } from '@/api/login'
const emit = defineEmits(['message'])
const loginInfo = reactive({username:'',password:''})
const user = userStore()
const router = useRouter()
const toRegister = (type) => {
  loginInfo.username = ''
  loginInfo.password = ''
  if(type == 'register') {
    user.isRegister = true
  }else {
    user.isRegister = false
  }
}

const login = (type) => {
  if(type == 'login') {
    emit('message', {
      show:true,
      type: 'success',
      message: '请求成功'
    })
    user.login(loginInfo).then((res) => {
      if(res.code === 1000) {
        emit('message', {
          show:true,
          type: 'success',
          message: res.message
        })
        setTimeout(() => {
          router.push('/home')
        }, 1000);
      }else {
        emit('message', {
          show:true,
          type: 'error',
          message: res.message
        })
      }
      
    })
  }else {
    registerApi(loginInfo).then((res) => {
      emit('message', {
        show:true,
        type: 'success',
        message: res.message
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.right-content {
  width: 100%;
  // position: relative;
  z-index: 2;
  animation: to-register1 1s ease forwards;
  .welcome-my {
    width: 450px;
    height: 50px;

    // position: absolute;
    // top: 100px;
    // left:30px;
    margin: 100px 0 50px 30px;
    

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .welcome, .to {
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      color: #bacad9;
    }

    .to {
      margin:0 15px;
    }
    .my {
      font-size: 26px;
      font-weight: 600;
    }

    .ma {
      margin-top: 10px;
      color: #999;
      font-size: 10px;
      font-weight: 600;
    }
  }

  .login-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .name, .password {
      width: 500px;
      margin: 20px 0;
      font-size: 22px;
      font-weight: 600;
      color: #bacad9;
    }

    .name-inp, .password-inp {
      width: 500px;
      border: none;
      border-bottom: 1px solid #bfbfbf;
      font-size: 16px;
      &:focus {
        outline: none;
      }

      &::placeholder {
        color: #bfbfbf;
      }
    }

    .login-btn {
      width: 500px;
      height: 50px;
      margin-top: 30px;
      background-color: #409EFF;
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 5px 2px #999;
      color:#fff;
      font-size: 22px;
      font-weight: 600px;
      &:hover {
        cursor: pointer;
      }
      &:active {
        background-color: blue;
      }
    }

    .operate {
      width: 500px;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .remember {
        height: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        #is-remember[type="checkbox"] {
          width: 16px;
          height: 16px;
        }

        .remember-text {
          line-height: 16px;
          margin-left: 3px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
        }
      }
    }

    .operate1{
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}

.to-register {
  z-index: -100;
  animation: to-register 1s ease forwards;
}

@keyframes to-register {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-584px);
  }
}

@keyframes to-register1 {
  0% {
    transform: translateX(-584px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>