const falar ={

    falar(){
        console.log(`${this.nome} está falando!`);
    }
    
}

const beber ={

    beber(){
        console.log(`${this.nome} está bebendo!`);
    }
    
}
const pessoaPrototype = {...falar,...beber};

function criaPessoa(nome,sobrenome)
{
    

    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    });
}


const pessoa = criaPessoa('murilo','santos')
console.log(pessoa);
