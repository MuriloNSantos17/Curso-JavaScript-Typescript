function retornaHora(data)
{
    //Se a data não for nula e não for instância de Date
    if(data && !(data instanceof Date))
    {
        throw new TypeError("Esperando uma data");
    }

    if(!data)
    {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
        
    });
     
}


try
{
    const hora= new Date('2021-07-12 22:00:02');

    console.log(retornaHora(hora));
}
catch(error)
{
    //console.log(error);
}
finally{
    console.log('Tenha um bom dia');
}
