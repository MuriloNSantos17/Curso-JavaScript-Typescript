const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        nome: {type:String, required:true},
        idade:{type:Number, required:true}
    }
);

const UserModel = mongoose.model('User',UserSchema)

module.exports = UserModel;
