const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')

const app = new Koa()

app.use(bodyparser())

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

module.exports = app
