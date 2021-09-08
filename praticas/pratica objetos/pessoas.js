//OBJETIVO É CRIAR UM SCRIPT QUE POSSUA UMA FUNÇÃO QUE CRIA PESSOAS E DEPOIS ACESSAR SALÁRIO, NOME DA MÃE, PAI E ENDEREÇO

function criaPessoa(nome,idade,cargo,salario,empresa,nomePai,nomeMae){

    return {
        dadosPessoais: {
            nome,
            idade
        },
        dadosTrabalho:{
            cargo,
            salario,
            empresa
        },
        dadosFamilia:{
            nomePai,
            nomeMae,
        }
    }
}

var murilo = criaPessoa('Murilo',22,"Dev JR",1000,'MMLGW','Ivanilton','Elizandra');

console.log(murilo);

const {dadosPessoais:{nome,idade}} = murilo;

const {dadosTrabalho:{cargo,salario,empresa}} = murilo;

const {dadosFamilia:{nomePai,nomeMae}} = murilo;


dadosPersonal = [nome,idade];
dadosWork = [cargo,salario,empresa];
dadosFamily =[nomePai,nomeMae];

console.log(dadosPersonal);
console.log(dadosWork);
console.log(dadosFamily);

