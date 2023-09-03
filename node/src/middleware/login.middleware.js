const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, User_Logged_In } = require("../config/err")
const userSql = require("../sql/user.sql")
const md5password = require("../utils/md5-password")

const verifyLogin = async (ctx, next) => {
  const { username, password } = ctx.request.body

  // 1.判断用户名和密码是否为空
  if(!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2.查询该用户是否在数据库中存在
  const user = await userSql.findUsername( username )
  if(user.length === 0) {
    return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
  }

  // 3.查询数据库中密码和用户传递的密码是否一致
  if(user[0].password != md5password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRENT, ctx)
  }

  //查询用户登录状态
  if(user[0].status === 1) {
    return ctx.app.emit('error', User_Logged_In, ctx)
  }

  // 4.将user对象保存在ctx
  ctx.user = user[0]

  await next()
}

const verifyLoginStatus = () => {
  
}

module.exports = {
  verifyLogin
}
