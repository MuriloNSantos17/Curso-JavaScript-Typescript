function saudacao(nome)
{
    console.log(`Boa Noite ${nome}`);
}

saudacao("Murilo");

function saudacaoRetorno(nome)
{
    return `Bom Dia ${nome}`;
}

var saudacaoNataly = saudacaoRetorno('Nataly');

console.log(saudacaoNataly);

function soma(x=1,y=2)
{
    return Number(x+y);
}

var resultado = soma(2,3);

console.log(resultado);

//Sem informar parâmetro
console.log(soma());

//Informei apenas 1 parâmetro
console.log(soma(12));

//Função anônima
const raiz = function(numero){
    return Math.sqrt(numero);
};

console.log(raiz(9));

//Função arrow
const valor = n => Math.sqrt(n);

console.log(valor(25));

