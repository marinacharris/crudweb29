const {Router} = require('express');
const router  = Router();
const { getArticulos, getArticulop, createArticulo, getArticulo, deleteArticulo, updateArticulo } =  require('../controllers/articulos.controller');

router.route('/')
    .get(getArticulos)
    .post(createArticulo);

router.route('/:id')
    .get(getArticulo)
    .delete(deleteArticulo)
    .put(updateArticulo)

router.route('/:precio')
    .get(getArticulop)

module.exports = router;