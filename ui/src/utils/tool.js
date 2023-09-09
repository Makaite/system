//解析get请求的params
const analysisParams = (params) => {
  let result = ''

  for(let key in params) {
    const value = params[key]
    let part = encodeURIComponent(key) + '='
    if(value !== null && value !== '' && typeof value !== 'undefined') {
      if(typeof value === 'object') {
        for(let valueKey in value) {
          if(value[valueKey] !== null && value[valueKey] !== '' && typeof value[valueKey] !== 'undefined') {
            let valueValue = value + '[' + valueKey + ']'
            let valuePart = encodeURIComponent(valueValue) + '='
            result += valuePart + encodeURIComponent(value[valueKey]) + '&'
          }
        }
      }else {
        result += part + encodeURIComponent(value) + '&'
      }
    }
  }

  return result
}

export {
  analysisParams
}