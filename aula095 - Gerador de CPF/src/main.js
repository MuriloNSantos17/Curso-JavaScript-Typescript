import './modules/GeraCPF'
import './assets/css/style.css';
import GeraCPF from './modules/GeraCPF';

function geraNewCpf(){
    const geraCpf = new GeraCPF();
    const cpf = geraCpf.geraNovoCPF();
    
    var divCpfGerado = document.querySelector('.cpf-gerado');

    divCpfGerado.innerHTML=cpf;
}


(function(){

    geraNewCpf();

})();

var botaoNovo = document.getElementById('botao-novo');

botaoNovo.addEventListener('click',(evt)=>{
    evt.preventDefault();
    geraNewCpf();
});

