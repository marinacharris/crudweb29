const Role = require('../models/roles.modelo')
const User = require('../models/user.modelo')
const bcrypt = require('bcryptjs')
const init = {}

init.createRoles = async()=>{
    try{
        //const vRoles = await Role.find({name: 'user'})
        contador = await Role.estimatedDocumentCount()
        if (contador >0) return
        const valores = await Promise.all([
            new Role({name: "user"}).save(),
            new Role({name: "admin"}).save()
        ])
         console.log(valores)
    }catch(error){
        console.log(error) 
    }
}

init.createAdmin = async()=>{
    //verificar si existe usuario administrador
    const user = await User.findOne({email:"admin@gmail.com"})
    const roles = await Role.find({name: {$in: ["admin"]}})
    if(!user){
        //crear usuario administrador
        await User.create({
            username: 'admin',
            email: 'admin@gmail.com',
            password: await bcrypt.hash("admin", 10),
            roles: roles.map((role) => role._id)
        })
        console.log('Administrador creado')
    }
}
module.exports = init