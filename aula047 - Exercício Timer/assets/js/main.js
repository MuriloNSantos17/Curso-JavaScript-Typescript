let container = document.querySelector('.container');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');
var tempo= document.querySelector('.timer');
let segundos=0;
let timer;

function criaHora(segundos)
{
    var data=new Date(segundos*1000).toLocaleTimeString('pt-BR',{
        timeZone: 'UTC',
        hour12:false,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    });

    return data;
}

function start(){
    clearInterval(timer);
    tempo.style.color='black';
    timer= setInterval(
        function(){
            segundos++;

            tempo.innerHTML= criaHora(segundos);           
        },1000
    );
    
}

iniciar.addEventListener('click',start);

pausar.addEventListener('click',()=>{
    clearInterval(timer);
    tempo.style.color='red';
});

zerar.addEventListener('click',()=>{
    clearInterval(timer);
    segundos=0;
    tempo.innerHTML='00:00:00';
    tempo.style.color='black';
})