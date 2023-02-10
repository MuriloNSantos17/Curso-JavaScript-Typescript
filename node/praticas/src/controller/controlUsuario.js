const UserModel = require('../model/modelUsuario')

function createUser(req,res){

    var nome = req.body.nome;
    var idade = req.body.idade;

    UserModel.create({
        nome,
        idade,
    }).then(()=>{
        res.send('Cadastrado com sucesso!')
    })

}

module.exports = {createUser}