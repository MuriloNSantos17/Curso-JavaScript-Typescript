var form = document.querySelector(".form");

form.addEventListener('submit',calcularIMC);

function calcularIMC(evento)
{
    evento.preventDefault();
    
    var peso = document.getElementById('input-peso');
    var altura = document.getElementById('input-altura');
    var resultado = document.getElementById('resultado');

    peso = peso.value.replace(",",".");
    altura = altura.value.replace(',',".");
    
    if(peso=='' || altura=='')
    {   
        resultado.innerHTML = "<p>Existem valores que não foram preenchidos</p>";
        resultado.style.backgroundColor="#FE7288";
    }
    else if(isNaN(peso) || isNaN(altura))
    {
        resultado.innerHTML = "<p>Existem valores que não são númericos</p>";
        resultado.style.backgroundColor="#FE7288";
    }
    else if(peso >597)
    {
        resultado.innerHTML = "<p>Peso inválido</p>";
        resultado.style.backgroundColor="#FE7288";
    }
    else if(altura >2.51)
    {
        resultado.innerHTML = "<p>Altura inválida</p>";
        resultado.style.backgroundColor="#FE7288";
    }    
    else
    {
    
        var calculo = peso / (altura* altura);

        var situacao ="";
        
        if(calculo<18.5)
        {
            situacao = "(Abaixo do Peso)";
        }
        else if(calculo>=18.5 && calculo<=24.9)
        {
            situacao = "(Peso normal)";
        }
        else if(calculo>=25 && calculo<=29.9)
        {
            situacao = "(Sobrepeso)";
        }
        else if(calculo>=30 && calculo<=34.9)
        {
            situacao = "(Obesidade grau 1)";
        }
        else if(calculo>=35 && calculo<=39.9)
        {
            situacao = "(Obesidade grau 2)";
        }
        else
        {
            situacao = "(Obesidade grau 3)";
        }

        resultado.style.backgroundColor="#01FEC3";
        resultado.innerHTML =`<p>Seu IMC é ${calculo.toFixed(2).replace(".",",")} ${situacao}`;

    }

   

    
}