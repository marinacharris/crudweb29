const Usuario = require("../models/user.modelo");
const userCtrl = {}

userCtrl.crearUsuario = async(req, res) =>{
    const{username, email, password} = req.body;
    const user  = new Usuario({
        username,
        email, 
        password
    })
    //ecriptar el password
    user.password = await Usuario.encryptPassword(user.password)

    // salvar nuevo usuario
    const savedUser = await user.save();

    return res.status(200).json({
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email
    })

}

module.exports = userCtrl;