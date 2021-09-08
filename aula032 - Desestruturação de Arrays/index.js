const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero,...resto] = numeros;

console.log(primeiroNumero,segundoNumero);

console.log(resto);


//Pulando valores

const [um, ,tres, ,cinco] = numeros;

console.log(um,tres,cinco);

//                  0           1                 
//                 0 1 2     0 1 2 
const valores = [ [1,2,3] , [4,5,6] ];

console.log(valores[0][1]);
