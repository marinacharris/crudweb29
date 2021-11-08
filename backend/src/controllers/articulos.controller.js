const Articulo = require('../models/articulo.modelo');
const articulosCtrl = {};

articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

articulosCtrl.createArticulo = async (req, res) =>{
    const {nombre, descripcion, precio, stock, linkfoto } = req.body;
    const newArticulo = new Articulo({
        nombre,
        descripcion,
        precio,
        stock,
        linkfoto
    });
    await newArticulo.save();
    res.json('Articulo añadido')
}

module.exports = articulosCtrl;