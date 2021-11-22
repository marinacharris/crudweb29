const {Router} = require("express")
const router = Router()
const {crearUsuario} = require ('../controllers/user.controller')

router.route('/')
    .post(crearUsuario)

module.exports = router;