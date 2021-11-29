const {Router} = require("express")
const router = Router()
const {crearUsuario} = require ('../controllers/user.controller')
const {autorizar, validar} = require ('../middlewares')

router.route('/')
    .post([autorizar.verifyToken, validar.checkDuplicateUsernameOrEmail],crearUsuario)

module.exports = router;