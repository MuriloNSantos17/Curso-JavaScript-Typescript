function calcular()
{

    var numero = window.prompt("Digite um número: ");

    numero = numero.replace(",",".");

    numero = Number(numero);

    var txtNumero = document.getElementById('h1-numero');
    var txtResultados = document.getElementById('div-resultados');

    txtNumero.innerText=`Seu número é: ${numero}`;
    
    $raiz = Math.sqrt(numero);

    txtResultados.innerHTML = `<p>Raíz Quadrada: ${$raiz.toFixed(2)}<br><br>É inteiro: ${Number.isInteger(numero)}<br><br>
    Is NaN: ${Number.isNaN(numero)}<br><br>Arredondado para Baixo: ${Math.floor(numero)}<br><br>Arredondado para cima: ${Math.ceil(numero)}<br><br>
    Com duas casas após a vírgula: ${numero.toFixed(2)}
    </p>`;

  

}