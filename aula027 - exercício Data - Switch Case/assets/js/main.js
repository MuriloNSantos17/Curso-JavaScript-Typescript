function dataAtual()
{
    var resultado = document.querySelector('.resultado');

    var data= new Date();

    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var diaSemana = data.getDay();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    diaSemana = verificaDiaDaSemana(diaSemana);
    mes = verificaMes(mes);
    minutos = formataMinutos(minutos);
    

    resultado.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minutos}`;
}


function verificaDiaDaSemana(diaSemana)
{
    var dayOfWeek;
    switch(diaSemana)
    {
        case 0:
            dayOfWeek="Domingo";
        break;
        
        case 1:
            dayOfWeek="Segunda-Feira";
        break;

        case 2:
            dayOfWeek="Terça-Feira";
        break;

        case 3:
            dayOfWeek="Quarta-Feira";
        break;

        case 4:
            dayOfWeek="Quinta-Feira";
        break;

        case 5:
            dayOfWeek="Sexta-feira";
        break;

        case 6: 
            dayOfWeek = "Sábado";
        break;

        default:
            dayOfWeek = "Erro";
        break;

    }

    return dayOfWeek;
}

function verificaMes(mes)
{
    var month;

    switch(mes)
    {
        case 0:
            month="Janeiro";
        break;

        case 1:
            month="Fevereiro";
        break;

        case 2:
            month="Março";
        break;

        case 3:
            month="Abril";
        break;

        case 4: 
            month="Maio";
        break;

        case 5:
            month="Junho";
        break;

        case 6: 
            month="Julho";
        break;
        
        case 7:
            month="Agosto";
        break;

        case 8:
            month="Setembro";
        break;

        case 9:
            month="Outubro";
        break;

        case 10:
            month="Novembro";
        break;

        case 11:
            month="Dezembro";
        break;

        default:
            month="Erro";
        break;
    }

    return month;

}

function formataMinutos(minuto){
    return minuto<10?`0${minuto}`:minuto;
}

dataAtual();