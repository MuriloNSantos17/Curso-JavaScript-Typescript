/*
    705.484.450-52

    7 x 10 = 70
    0 x 09 = 0
    5 x 08 = 40
    4 x 07 = 28 
    8 x 06 = 48 
    4 X 05 = 20
    4 X 04 = 16 
    5 x 03 = 15 
    0 X 02 = 0 
    Soma = 237;

    Resultado = (237 % 11) = 5 (Primeiro Digito)

    se o número do  digito for maior que 9 consideramos 0

    Repetimos a conta com outra lógica, começando em 11 e indo para o primeiro digito no final

    7 x 11 = 7
    0 x 10 = 0
    5 x 09 = 40
    4 x 08 = 28 
    8 x 07 = 48 
    4 X 06 = 20
    4 X 05 = 16 
    5 x 04 = 15 
    0 X 03 = 0
    Digito 1 * 02 = Resultado = 11 - (284 % 11) =2
*/
function validaCpf(cpf){

    console.log(cpf);

    let numeroCpf = cpf;


    numeroCpf = numeroCpf.replace('-','');
    numeroCpf = numeroCpf.replace('.','');
    numeroCpf = numeroCpf.replace('.','');

    console.log(numeroCpf);
    

    let somaPrimeiroDigito=0;
    let contadorInterno=9;

    for(i=2; i<=10; i++)
    {           
        somaPrimeiroDigito += ( i * numeroCpf[contadorInterno] );
        contadorInterno--;
    }

    let primeiroDigito = 11 - (somaPrimeiroDigito %11);

    if(primeiroDigito > 9)
    {
        primeiroDigito =0;
    }

    contadorInterno =8;

    let somaSegundoDigito=0;
    for(i=3; i<=11; i++)
    {
        console.log(numeroCpf[contadorInterno]);

        somaSegundoDigito += ( i * numeroCpf[contadorInterno]);

        contadorInterno--;
    }

    somaSegundoDigito += (primeiroDigito *2);

    let segundoDigito = 11 - (somaSegundoDigito %11);

    console.log('Somas')
    console.log(somaPrimeiroDigito);
    console.log(somaSegundoDigito); 

    console.log('Digitos');
    console.log(primeiroDigito);
    console.log(segundoDigito);
}

const cpf = '235.144.580-57';

validaCpf(cpf);
