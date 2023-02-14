const HomeModel = require('../models/HomeModel')

/*
HomeModel.create({
    titulo:"HP",
    descricao:"Harry potter"
}).then((dados)=>{
    console.log(dados)
}).catch((err)=>{
    console.log(err)
})
*/

HomeModel.find().then((dados)=>{
    console.log(dados)
});