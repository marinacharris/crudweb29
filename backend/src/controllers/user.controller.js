const Usuario = require("../models/user.modelo");
const Role = require("../models/roles.modelo")
const userCtrl = {};

userCtrl.crearUsuario = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const rolesFound = await Role.find({name:{$in: roles}})
    const user = new Usuario({
      username,
      email,
      password,
      roles: rolesFound.map((role)=>role._id),
    });

    //ecriptar el password
    user.password = await Usuario.encryptPassword(user.password);

    // salvar nuevo usuario
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch(error) {
      console.log(error)

  }
};

module.exports = userCtrl;
