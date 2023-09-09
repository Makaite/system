const setToken = (toekn) => {
  window.localStorage.setItem('token', toekn)
}

const getToken = () => {
  return window.localStorage.getItem('token')
}

const removeToken = () => {
  return window.localStorage.removeItem("token")
}

export {
  setToken,
  getToken,
  removeToken
}
