const {Schema, model} = require('mongoose');

const articuloSchema = new Schema ({
    titulo: {type: String, require: true},
    imagen: String,
    precio: String,
    descripcion: String,
    stock: Number

});

module.exports = model('Productos', articuloSchema);