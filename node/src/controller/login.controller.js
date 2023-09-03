const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/screct')
const { updateUserStatus } = require('../sql/user.sql')

class LoginController {
  async sign(ctx, next) {
    const { id,username } = ctx.user
    
    //生成对应的token
    const token = jwt.sign({id, username}, PRIVATE_KEY, {
      expiresIn: 60,
      algorithm: 'RS256'
    })

    //修改登录状态，标记为已登录  0 未登录  1 已登录
    const res = await updateUserStatus(id, 1)
    
    if(res.changedRows > 0) {
      ctx.body = {
        code: 1000,
        data: {id, username, token},
        message: '登录成功'
      }
    }else {
      ctx.body = {
        code: -9999,
        message: '登录异常'
      }
    }
  }
}

module.exports = new LoginController()
