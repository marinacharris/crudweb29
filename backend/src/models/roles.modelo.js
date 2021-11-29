const {Schema, model} = require('mongoose')
const ROLES = ["user","admin"]

const roleSchema = new Schema(
    {
        name: String
    },
    {
    versionKey:false,
    }
)


module.exports = model("Role", roleSchema);
