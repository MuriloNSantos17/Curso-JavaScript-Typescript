//Função Factory
function criaAluno(nome,idade,cargo)
{
    return {nome,idade,cargo};
}

//Variável que cria um new Aluno
var aluno = criaAluno("Murilo",22,"Desenvolvedor Júnior");
var aluno2 = criaAluno("Matheus",23,"Advogado");


console.log(aluno);
console.log(aluno2);

//Criando objeto com função
const pessoa = {
    nome : 'Murilo',
    sobrenome:'Santos',
    idade: 25,

    imprimeNome(){
        console.log(this.nome);
    }
};

pessoa.imprimeNome();