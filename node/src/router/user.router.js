const KoaRouter = require('@koa/router')

const userRouter = new KoaRouter({prefix: '/users'})

const UserController = require('../controller/user.controller')
const { verifyUser, passwordEncryption } = require('../middleware/user.middleware')
const userController = require('../controller/user.controller')


userRouter.post( '/register', verifyUser, passwordEncryption, UserController.create)

userRouter.get('/logout', userController.logout)

module.exports = userRouter