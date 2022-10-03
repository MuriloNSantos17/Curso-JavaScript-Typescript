const nome = 'Murilo';
const sobrenome = 'Santos';

const falaNome = ()=>{
    console.log(nome,sobrenome);
}


/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

