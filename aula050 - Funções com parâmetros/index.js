function funcao(a,b,c)
{
    let total=0;
    
    for(let arg of arguments)
    {
        total+=arg;
    }

    console.log(`Total: ${total}\n${a},${b},${c}`);
}

//Somou o que foi passado através do arguments;
funcao(1,1,3,3);

//Forçando o b ter um valor padrão
function soma(a,b=0)
{
    console.log(a+b);
}

soma(2);

//Função com objeto como parâmetro
function pessoa({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade);
}

pessoa({nome:"Murilo",sobrenome:"Santos",idade:22});

//NO CASO TEMOS O OPERADOR E O VALOR INICIAL E TODO O RESTO É JOGADO DENTRO DO ARRAY NÚMEROS
function calcular(operador,acumulador,...numeros)
{
   
        for(let num of numeros)
        {
            if(operador ==='+') acumulador+=num;
            if(operador ==='-') acumulador-=num;
            if(operador ==='*') acumulador*=num;
            if(operador ==='/') acumulador/=num;
        }
        
        console.log(acumulador);
    
}

calcular('-',1,10,20,30);