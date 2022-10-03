const modulo1 = require('./modulo01');
const Cachorro = require('./animais/mamiferos/cachorro');

const resultado = modulo1(2,3);
console.log(`Resultado Multiplicação: ${resultado}`);

const pipoca = new Cachorro('Pipoca');
pipoca.latir();

