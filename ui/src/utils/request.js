import axios from 'axios'
import { getToken } from './auth'
import { analysisParams } from './tool'
import cache from './cache'
import errorCode from './errorCode'
import { MessagePlugin, DialogPlugin } from 'tdesign-vue-next'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000
})

// 是否显示重新登录
export let isRelogin = { show: false }

instance.interceptors.request.use((config) => {
  //是否需要设置token
  const is_token = (config.headers || {}).isToken === false
  //是否需要防止数据重复提交
  const is_request_submit = (config.headers || {}).isRequestSubmit === false

  //如果在localStorage有token,并且在config的header中没有设置isToken为false，那么将token添加到请求头中去
  if(getToken() && !is_token){
    config.headers['Authorization'] = 'Bearer' + getToken()
  }

  //get请求
  if(config.method === 'get' && config.params) {
    let url = config.url + '?' + analysisParams(config.params)
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }

  //post/put请求的处理
  if(!is_request_submit && (config.method === 'post' || config.method === 'put')) {
    const requestObj = {
      url: config.url,
      data: typeof config.data === 'object' ? JSON.stringify(config.data) : config.data,
      time: new Date().getTime()
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    
    if(sessionObj === undefined || sessionObj === null || sessionObj === '') {
      cache.session.setJSON('sessionObj', requestObj)
    }else {
      const s_url = sessionObj.url
      const s_data = sessionObj.data
      const s_time = sessionObj.time
      const interval = 1000
      if(s_url === requestObj.url && s_data === requestObj.data && requestObj.time - s_time < interval) {
        const message = '数据正在处理中，请不要重复提交'
        console.warn(`[${s_url}]` + message)
        return Promise.reject(new Error(message))
      }else {
        cache.session.setJSON('sessionObj', requestObj)
      }
    }
  }
  return config
}, (err) => {
  Promise.reject(err)
})

instance.interceptors.response.use((res) => {
  console.log('打印响应拦截',res);
  //设置状态码，默认200
  const code = res.status || 200
  //获取错误信息
  const msg = errorCode[code] || res.data.msg || errorCode['default']
  //二进制数据需要直接返回
  if(res.request.responseType === 'blob' || res.request.responseType === 'arraybuffer') {
    return res.data
  }
  if(code === 401) {
    if(!isRelogin.show) {
      isRelogin.show = true
      //这里要提示框提示，登录过期需要重新登录，并调用退出回到登录也面
      const confirmDia = DialogPlugin({
        header: '提示',
        body: '登录过期，请重新登录',
        confirmBtn: '确认',
        theme: 'warning',
        placement: 'center',
        onConfirm: () => {
          isRelogin.show = false
          confirmDia.hide()
          //这里执行退出和跳转到登录页面
        }
      })
    }
    return Promise.reject('无效的请求或者登录已过期，请重新登录')
  } else if(code === 500) {
    MessagePlugin.error({content: msg})
    return Promise.reject(new Error(msg))
  } else if(code === 601) {
    MessagePlugin.warning({content: msg})
    return Promise.reject('error')
  } else if(code !== 200) {
    MessagePlugin.error({content: msg})
    return Promise.reject('error')
  } else {
    return res.data
  }
}, (err) => {
  let { message } = err
  if(message == 'Network Error') {
    message = '网络错误，后端接口连接异常'
  } else if(message.includes('timeout')) {
    message = '接口请求超时'
  } else if( message.includes('Request failed with status code')) {
    message = '系统接口' + message.substr(message.length - 3) + '异常'
  }

  MessagePlugin.error({content: message})
  return Promise.reject(err)
})

export default instance