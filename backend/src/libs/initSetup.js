const Role = require('../models/roles.modelo')
const User = require('../models/user.modelo')
const bcrypt = require('bcryptjs')
const init = {}

init.createRoles = async()=>{
    try{
        const vRoles = await Role.find({name: 'user'})
        console.log(vRoles) 
        if (vRoles!=[]) return
        const valores = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save()
        ])
         console.log(valores)
    }catch(error){
        console.log(error)
    }
}
module.exports = init