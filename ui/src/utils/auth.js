const setToken = (toekn) => {
  window.localStorage.setItem('token', toekn)
}

const getToken = () => {
  return window.localStorage.getItem('token')
}

export {
  setToken,
  getToken
}
