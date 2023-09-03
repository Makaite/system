import { defineStore } from 'pinia'

import { setToken, getToken } from '@/utils/auth.js'
import { loginApi } from '@/api/login'

export const userStore = defineStore('userStore', {
  state: () => { 
    return{
      token: getToken(),
      id:null,
      username: '',
      isRegister: false
    }
  },
  getters:{
    userId: (state) => {
      return state.id
    },
    toRegister: (state) => {
      state.isRegister = true
    }
  },
  actions: {
    login(data) {
      return new Promise((resolve, reject) => {
        loginApi(data).then((res) => {
          if(res.code === 1000) {
            const { id, username, token } = res.data
            this.id = id
            this.username = username
            this.token = token
            setToken(token)
          }
          resolve(res)
        })
      })
    }
  }
})