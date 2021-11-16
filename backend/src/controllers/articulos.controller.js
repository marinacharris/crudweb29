const Articulo = require('../models/articulo.modelo');
const articulosCtrl = {};

articulosCtrl.getArticulos = async (req, res) =>{
    const articulos = await Articulo.find();
    res.json(articulos);
}

articulosCtrl.createArticulo = async (req, res) =>{
    const {titulo, imagen, precio, descripcion, stock} = req.body;
    const newArticulo = new Articulo({
        titulo,
        imagen,
        precio,
        descripcion,
        stock
        
    });
    await newArticulo.save();
    res.json('Articulo añadido')
}

articulosCtrl.getArticulo = async(req,res)=>{
    const articulo = await Articulo.findById(req.params.id)
    res.json(articulo)
}

articulosCtrl.getArticulop = async(req,res)=>{
    const articulo = await Articulo.findByprecio(req.params.precio)
    res.json(articulo)
}

articulosCtrl.deleteArticulo = async(req, res)=>{
    await Articulo.findByIdAndDelete(req.params.id)
    res.json('Artículo eliminado')
}

articulosCtrl.updateArticulo = async(req, res)=>{
    const{nombre, descripcion, precio, stock} = req.body;
    await Articulo.findByIdAndUpdate(req.params.id,
        {nombre, descripcion, precio, stock }
        
        )
        res.json('Artículo actualizado');
}



module.exports = articulosCtrl;