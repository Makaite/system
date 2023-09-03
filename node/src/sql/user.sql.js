const connection =  require('../app/database')

class UserSql {
  //创建用户
  async create(user) {
    const { username, password } = user

    const statement = 'INSERT INTO user ( username, password ) VALUES ( ? , ? );'

    const [ result ] = await connection.execute( statement, [ username, password ] )
    
    return result
  }

  //查询用户名称
  async findUsername(name) {
    const statement = 'SELECT * FROM user WHERE username = ?;'

    const [ value ] = await connection.execute( statement, [ name ] )

    return value
  }

  //修改用户登录状态
  async updateUserStatus(id, status) {
    const statement = 'UPDATE user SET status = ? WHERE id = ?;'
    const [result] = await connection.execute(statement, [status, id])
    return result
  }
}

module.exports = new UserSql()