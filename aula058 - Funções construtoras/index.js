function Pessoa(nome,sobrenome){
    const id=10;
    this.nome =nome
    this.sobrenome = sobrenome
    
    this.imprimeDados= ()=>{
        console.log(this.nome);
        console.log(id);
    }
}

var murilo = new Pessoa('Murilo','Santos');

murilo.imprimeDados();