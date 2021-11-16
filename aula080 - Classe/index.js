class Pessoa{

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
}

const murilo = new Pessoa('Murilo',22);

console.log(murilo);


