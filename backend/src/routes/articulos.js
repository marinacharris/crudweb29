const {Router} = require('express');
const router  = Router();
const { getArticulos, createArticulo } =  require('../controllers/articulos.controller');

router.route('/')
    .get(getArticulos)
    .post(createArticulo);

module.exports = router;