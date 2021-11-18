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

//FACTORY
function Pessoa(nome,idade)
{
    this.nome =  nome;
    this.idade= idade;
    
}


const lucas = Pessoa('Lucas',24);

//Construtor
const matheus = new Pessoa('Matheus',20);

console.log(matheus);

matheus.nome = 'Mathias';

//Congela Objeto
Object.freeze(matheus);

matheus.nome = "Matheus";

console.log(matheus);