const pessoa= {
    nome: 'Murilo',
    sobrenome: 'Santos'
};

console.log(pessoa.nome);

const chave = 'sobrenome';

console.log(pessoa[chave]);


 //Criando através de instância
const pessoa1 = new Object();

pessoa1.nome='Murilo';
pessoa1.sobrenome='Santos';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

