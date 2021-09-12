function retornaHora(data)
{
    if( data && !(data instanceof Date) )
    {
       
        throw new TypeError("Esperando uma instância de Date!");
    }

    if(!data)
    {       
        data = new Date();
    }

    return data.toLocaleString('pt-BR',{
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
    });
}


try
{
    const resultado = retornaHora();
    console.log(resultado);
    
}
catch(error)
{
    console.log("Ocorreu um erro");
}
