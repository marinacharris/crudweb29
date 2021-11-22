const User = require('../models/user.modelo')
const authCtrl = {}

authCtrl.signin = async(req, res)=>{
    res.json('Ingresar')

}

authCtrl.signup = async(req, res)=>{
    res.json('Dar de alta')
}

module.exports = authCtrl;
