const userSql = require('../sql/user.sql')
const { updateUserStatus } = require('../sql/user.sql')

class UserController {
  async create(ctx, next) {
      const result = await userSql.create( ctx.request.body )

      ctx.body = {
        code: 1000,
        data: result,
        message: '注册成功'
      }
  }


  async logout(ctx, next) {
    const { id } = ctx.query

    const res = await updateUserStatus(Number(id), 0)

    if(res.changedRows > 0) {
      ctx.body = {
        code: 1000,
        message: '退出成功'
      }
    }else {
      ctx.body = {
        code: -9999,
        message: '退出异常'
      }
    }
  }
}

module.exports = new UserController()