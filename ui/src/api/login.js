import request from '@/utils/request'

//登录
export const loginApi = (data) => {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}

//退出
export const logoutApi = (query) => {
  return request({
    url: '/users/logout',
    method: 'get',
    query:query
  })
}

//注册
export const registerApi = (data) => {
  return request({
    url: '/users/register',
    method: 'post',
    data:data
  })
}