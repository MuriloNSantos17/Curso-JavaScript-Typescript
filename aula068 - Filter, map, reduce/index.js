const numeros = [5,10,20,7,12,11,523];

//Filtrar pares
//Dobras os valores
// reduzir e somar tudo

const pares = numeros.filter( valor=>{if(valor%2===0) return valor});

const dobro = pares.map(valor=>{return valor*2});

console.log(pares);

console.log(dobro);

const total = dobro.reduce(
    function(acumulador,valor)
    {
        return acumulador+=valor;
    }
);

console.log(total);