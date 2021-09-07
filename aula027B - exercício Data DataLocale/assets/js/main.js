function dataAtual()
{
    var resultado = document.querySelector('.resultado');

    var date= new Date();

    var data = date.toLocaleString('pt-BR',{dateStyle: 'full', timeStyle: 'short'});

    

    resultado.innerHTML = `${data}`;
}


dataAtual();