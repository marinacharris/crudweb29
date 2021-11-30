const {Router} = require('express');
const router  = Router();
const { getArticulos, getArticulop, createArticulo, getArticulo, deleteArticulo, updateArticulo } =  require('../controllers/articulos.controller');
const {autorizar, validar} = require ('../middlewares')

router.route('/')
    .get(getArticulos)
    .post([autorizar.verifyToken, autorizar.isAdmin], createArticulo);

router.route('/:id')
    .get(getArticulo)
    .delete([autorizar.verifyToken, autorizar.isAdmin], deleteArticulo)
    .put([autorizar.verifyToken, autorizar.isAdmin], updateArticulo)


module.exports = router;