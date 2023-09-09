const sessionCache = {
  set(key, value) {
    if(!sessionStorage){
      return
    }
    if(key != null && value != null) {
      sessionStorage.setItem(key, value)
    }
  },
  get(key) {
    if(!sessionStorage) {
      return
    }
    if(key === null) {
      return
    }
    return sessionStorage.getItem(key)
  },
  setJSON(key, value) {
    if(value != null) {
      this.set(key, JSON.stringify(value))
    }
  },
  getJSON(key) {
    const value = this.get(key)
    if(value != null) {
      return JSON.parse(value)
    }
  },
  remove(key) {
    sessionStorage.removeItem(key)
  }
}

export default{
  session: sessionCache
}