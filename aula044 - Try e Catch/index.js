function soma(x,y)
{
    if(typeof x !=='number' || typeof y!=='number')
    {
        throw new Error('Os valores de x e y precisam ser numéricos!');
    }

    return x+y;
}

try
{
    console.log(soma(1,2));
    console.log(soma('A','B'));
}
catch(erro)
{
    console.log("Algo deu errado!")
}
