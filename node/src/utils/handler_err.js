const app = require('../app/index')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, User_Logged_In } = require('../config/err')

app.on( 'error', ( err, ctx ) => {
  let code = 0
  let message = ''

  switch( err ) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或密码不能为空'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已注册'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户不存在，请检查或注册后再登录'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '密码不正确，请检查'
      break
    case User_Logged_In:
      code = -1005
      message = '该账号已登录，无法再次进行登录'
      break
  }

  ctx.body = { code, message }
})