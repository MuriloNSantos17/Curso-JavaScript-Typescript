const Pessoa = function(nome,idade)
{
    this.nome = nome;
    this.idade = idade;

}


Pessoa.prototype.sayHello = "Hello";

const pessoa1 = new Pessoa('Murilo',22);

console.log(pessoa1);

console.log(pessoa1.sayHello);
