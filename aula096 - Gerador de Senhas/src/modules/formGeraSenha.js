import geradorSenha from "./geradores";

var divSenhaGerada = document.querySelector('.senha-gerada');
var inputQuantidade = document.querySelector('.input-quantidade');
var checkMaiuscula = document.querySelector('.check-maiuscula');
var checkMinuscula = document.querySelector('.check-minuscula');
var checkNumero = document.querySelector('.check-numeros');
var checkSimbolo = document.querySelector('.check-simbolos');
var botaoGerar = document.querySelector('.botao-gerar-senha');

botaoGerar.addEventListener('click',(evt)=>{
    evt.preventDefault();

    var senha = novaSenha();

    divSenhaGerada.innerHTML = senha;
});

function novaSenha(){
    const senha = geradorSenha(
        inputQuantidade.value,
        checkMaiuscula.checked,
        checkMinuscula.checked,
        checkNumero.checked,
        checkSimbolo.checked
    );

    return senha;
}
console.log(checkNumero)

export default () => {
    console.log('Olá');
};