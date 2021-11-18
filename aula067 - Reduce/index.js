const numeros = [10,20,30,423,12,33,53];

const soma = numeros.reduce(
    function(acumulador,valor)
    {
        return acumulador+valor;
    }
);


const arrayImpar = numeros.reduce(function(acumulador,valor,indice,array) {
        if(valor % 2 !==0) acumulador.push(valor); return acumulador;
},[]);

console.log(soma);

console.log(arrayImpar);


const pessoas = [
    {nome:'Murilo', idade:22},
    {nome:'Brenda', idade:30},
    {nome:'Gisa', idade:55},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;

    return valor;
});

console.log(maisVelha);