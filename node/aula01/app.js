const modulo1 = require('./modulo1');
const {Pessoa} = require('./pessoa');
const axios = require('axios');

const pessoa1 = new Pessoa('Murilo');

modulo1.falaNome();

console.log(pessoa1);

axios.get ('https://viacep.com.br/ws/80530280/json/').
then((response)=>{
    console.log(response.data)
}).catch((err)=>{
    console.log(err);
});