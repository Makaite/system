const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Makaite123.',
  database: 'my_demo_02',
  connectionLimit: 5
})

connectionPool.getConnection((err, connection) => {
  console.log('======sql connection======');
  if(err) {
    console.log('获取mysql连接失败~', err)
    return
  }

  connection.connect((err) => {
    if(err) {
      console.log('mysql连接失败~', err)
    }else {
      console.log('mysql连接成功~');
    }
  })
})

const connection = connectionPool.promise()

module.exports = connection