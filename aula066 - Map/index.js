const numeros = [10,20,30];

const numerosEmDobro = numeros.map(valor => valor*2);

console.log(numerosEmDobro);

//Para cada Elemtno:
//Retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome do objeto 
//adicione uma chave id em cada objeto
const pessoas =[
    {nome:'Luiz',idade:63},
    {nome:'Murilo',idade:22},
    {nome: 'Débora',idade:24},
    {nome: 'Aline', idade:28}
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj=>({idade:obj.idade}));

const objetoId = pessoas.map(function(obj,indice){
    
    obj.id = indice;

    return obj;
});

console.log(nomes);
console.log(idades);
console.log(objetoId);