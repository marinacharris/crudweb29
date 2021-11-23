const User = require("../models/user.modelo");
const Role = require("../models/roles.modelo");
const jwt = require("jsonwebtoken");
const config = require("../config");
const authCtrl = {};


authCtrl.signup = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });
    console.log(newUser);
    //verificar roles
    if (req.body.roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    //salvar usuario en mongo
    const savedUser = await newUser.save();

    //Crear el token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400,
    });
    return res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

authCtrl.signin = async(req, res)=>{
    try{
        const userFound = await User.findOne({email: req.body.email}).populate("roles");
    
    if (!userFound) return res.status(400).json ({message: 'Usuario no encontrado'})

    const matchPassword = await User.comparePassword(
        req.body.password, userFound.password
    )

    if(!matchPassword) 
        return res.status(400).json({
            token: null,
            message: "Clave incorrecta"
        })

    const token = jwt.sign({id: userFound._id},config.SECRET,{expireIn:86400})
    res.json({token})

    }catch(error){
        console.log(error)
    }
    
}

module.exports = authCtrl;
