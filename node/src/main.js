const app = require('./app/index')
const { SERVER_PORT } = require('./config/server')
require('./utils/handler_err')

app.listen(SERVER_PORT, () => {
  console.log('=======node server======');
  console.log('node env have 4910端口服务启动成功~');
})