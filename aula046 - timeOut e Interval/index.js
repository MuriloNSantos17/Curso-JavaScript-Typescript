function retornaHora()
{
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}



const timer = setInterval(function(){console.log(retornaHora())},1000);

setTimeout(function(){
    clearInterval(timer)
},6000);