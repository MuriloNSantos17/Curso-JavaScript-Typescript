function sayHello()
{
    return "Hello";
}

//SE TODOS FOREM TRUE MOSTRE O FINAL SE NÃO MOSTRE O PRIMEIRO FALSO
console.log('Murilo' && 'Sara' && sayHello());

//Example False
console.log('Teste' && sayHello() && '');


//EXEMPLO OR

var corUsuario="Vermelho";
var corPadrao="Preto";
//RETORNA O PRIMEIRO VERDADEIRO
console.log(corUsuario || corPadrao);