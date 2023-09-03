const KoaRouter = require('@koa/router')
const LoginController = require('../controller/login.controller')
const { verifyLogin } = require('../middleware/login.middleware')

const loginRouter = new KoaRouter( {prefix: '/login'} )

loginRouter.post('/', verifyLogin, LoginController.sign)

module.exports = loginRouter
