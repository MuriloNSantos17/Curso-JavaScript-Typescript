/*
    705.484.450-52

    07X  00X 05X 04X 08X 04X 04X 05X 000X
    010  009 008 007 006 005 004 003 0002 
*/


/*
    705.484.450-52

    07X  00X 05X 04X 08X 04X 04X 05X 000X 1dgt
    011  010 009 008 007 006 005 004 0003 0002
*/


function validaCPF(numeroCpf)
{
    let contadorInterno=8;
    var calc=0;
    var soma=0;

    for(i=2;i<=10;i++)
    {
        //console.log("I: "+i)
        //console.log(numeroCpf[contadorInterno])

        calc = Number(numeroCpf[contadorInterno]) * i;
        
        soma+=calc;
        
        contadorInterno--;
    }

    //console.log(soma);
    
    var primeiroDigito = 11 - (soma % 11);

    if(primeiroDigito >9)
    {
        primeiroDigito=0;
    }
    console.log("*****")

    contadorInterno =11;
    soma=0;

    for(i=0;i<=8;i++)
    {
        console.log("C: "+contadorInterno)
        console.log(numeroCpf[i])

        calc = Number(numeroCpf[i]) * contadorInterno;
        
        contadorInterno--;

        soma+=calc;
        
        
    }

    var segundoDigito =0;
    
    soma += (primeiroDigito*2);

    segundoDigito = 11 - (soma % 11);

    if(segundoDigito>9)
    {
        segundoDigito = 0;
    }
    
    console.log(primeiroDigito);
    console.log(segundoDigito);
}

validaCPF('70548445052');