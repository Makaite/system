const { NAME_IS_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED } = require('../config/err')
const userSql = require('../sql/user.sql')
const md5password = require('../utils/md5-password')

const verifyUser = async ( ctx, next ) => {
  const { username, password } = ctx.request.body

  if( !username || !password ) {
    return ctx.app.emit( 'error', NAME_OR_PASSWORD_IS_REQUIRED, ctx )
  }

  const user = await userSql.findUsername( username )
  
  if( user.length != 0 ) {
    return ctx.app.emit( 'error', NAME_IS_ALREADY_EXISTS, ctx )
  } 

  await next()
}

const passwordEncryption = async ( ctx, next ) => {
  ctx.request.body.password = md5password(ctx.request.body.password)

  await next()
}

module.exports = {
  verifyUser,
  passwordEncryption
}