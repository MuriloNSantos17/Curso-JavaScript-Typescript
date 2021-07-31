/*
  Nessa aula vamos aprender o objeto Math
*/

let num1 = 9.54578;

let num2 = Math.floor(num1); //Arredonda objeto para baixo

console.log(`Número arredondado para baixo: ${num2}`);

num2 = Math.ceil(num1); //Arredonda pra cima

console.log(`Número arredondado para cima: ${num2}`);

num2 = Math.round(num1); //Arredonda para o mais próximo

console.log(`Número arredondado para o mais próximo: ${num2}`);

//Retorna o Maior número da lista
console.log(`O Maior número da lista é: ${Math.max(10,20,30,40,-100,500)}`);

//Retorna o Meno número da lista: 
console.log(`O Menor número da lista é: ${Math.min(10,20,30,-100,200,-400)}`);

//Retorna número aleatório entre 0 e 1
console.log(`Número aleatório: ${Math.random()}`)

//retorna número entre valores específicos 8 é máximo e mínimo é 2
console.log(`Número aleatório: ${Math.random() * (8-2) +2}`);

//Número PI 
console.log(`Número PI: ${Math.PI}`);

//Raiz Quadrada
console.log(`Raíz Quadrada: ${Math.sqrt(num1)}`);