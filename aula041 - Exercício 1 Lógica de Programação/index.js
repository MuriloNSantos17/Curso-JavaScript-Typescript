//ESCREVER UMA FUNÇÃO QUE RECEBE DOIS NÚMEROS E RETORNA O MAIOR DOS DOIS

//FORMA COMPLEXA COM VALIDAÇÕES
function comparaNumeros(num1,num2)
{
    if(isNaN(num1) || isNaN(num2))
    {
        return "Um dos valores não é um número";
    }
    else
    {
        if(num1==num2)
        {
            return `O Valor ${num1} e ${num2} são iguais`;
        }
        else if(num1>num2)
        {
            return `O valor maior é o ${num1}`;
        }
        else
        {
            return `O valor maior é o ${num2}`;
        }
    }


}


const resultado = comparaNumeros(3,5);

const resultadoSimples = (x,y) =>{
   return x > y ?  x :  y;
}

console.log(resultadoSimples(10,20));


console.log(resultado);