function calcular()
{
  //Variáveis de onde os resultados serão setados
  var txtNumeroEscolhido = document.getElementById('txtNumeroEscolhido');
  var txtRaiz = document.getElementById('txtRaiz');
  var txtNan = document.getElementById('txtNan');
  var txtInteiro = document.getElementById('txtInteiro');
  var txtArredondadoBaixo = document.getElementById('txtArredondadoBaixo');
  var txtArredondadoCima = document.getElementById('txtArredondadoCima');
  var txtCasaDecimal = document.getElementById('txtCasaDecimal');''

  var numero = window.prompt("Digite um número: ");
  numero = numero.replace(",","."); //Trocando , por .
  const num = Number(numero); //Conversão para Integer
  
  
  txtNumeroEscolhido.innerText=`${num}`;

  var raiz = Math.sqrt(num); //Raiz Quadrada
  txtRaiz.innerText= `${raiz.toFixed(1)}`; 

  txtInteiro.innerText =`${(Number.isInteger(num))}`;

  //Função Curiosa, pois a mesma retorna false se for número e true se não for lol
  txtNan.innerText=`${Number.isNaN(num)}`; //Validando se é um Número

  txtArredondadoBaixo.innerText= `${Math.floor(num)}`;

  txtArredondadoCima.innerText = `${Math.ceil(num)}`;

  txtCasaDecimal.innerText= `${num.toFixed(2)}`;

}