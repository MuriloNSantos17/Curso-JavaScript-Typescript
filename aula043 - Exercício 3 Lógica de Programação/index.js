/*
    ESCREVER UMA FUNÇÃO QUE RECEBE UM NÚMERO E 
    RETORNE O SEGUINTE:
    NUMERO É DIVÍSIVEL POR 3 = Fizz
    NUMERO É DIVÍSIVEL POR 5 = BUZZ
    NUMERO E DIVISIVEL POR 3 E 5 = FizzBuzz
    NUMERO NÃO É DIVISIVEL POR 3 E 5 RETORNA O PRÓPRIO NUMERO
    CHECAR SE O NÚMERO É REALMENTE UM NUMERO 
    USA A FUNÇÃO COM NÚMEROS DE 0 A 100
*/

function fizzBuzz(x){

    if(isNaN(x))
    {
        return "O valor de X precisa ser númérico";
    }
    else if(x<=100)
    {
        if( (x%3 ==0) && (x%5==0) )
        {
            return "FizzBuzz";
        }
        else if(x%3==0)
        {
            return "Fizz";
        }
        else if(x%5==0)
        {
            return "Buzz";
        }
        else
        {
            return x;
        }
    }
    else
    {
        return `O valor de X (${x}) está fora do intervalo entre 1 e 100`;
    }
}

console.log(fizzBuzz(101));

for(let i=0;i<=100;i++)
{
    console.log(fizzBuzz(i));
}

