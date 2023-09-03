import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const instance = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000
})

instance.interceptors.request.use((config) => {
  if(config.method == 'get') {
    if(config.query) {
      let temp = Object.keys(config.query)
      temp.forEach((key,index) => {
        if(index === 0) {
          config.url = config.url +  '/?' + key + '=' + config.query[key]
        }else{
          config.url = config.url + '&' +  key + '=' + config.query[key]
        }
      })
    }
    return config
  }

  if(config.method == 'post') {
    typeof config.data == 'object' ? JSON.stringify(config.data) : config.data

    return config
  }
}, (err) => {
  console.log('请求错误', config);
})

instance.interceptors.response.use((res) => {
  console.log('响应拦截', res);
  if(res.status === 200){
    return res.data
  }
}, (err) => {
  console.log('响应错误', err);
})

export default instance