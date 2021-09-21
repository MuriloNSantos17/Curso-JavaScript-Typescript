falaOi();

function falaOi()
{
    console.log('Oi');
}


//First class object

const dado = function(){
    console.log('sou um dado');
}


function executaFuncao(funcao) //Função como parâmetro
{
    funcao();
}

executaFuncao(dado);

//Arrow Function 

const arrowFunction = ()=>{
    console.log('Arrow Function');
}

arrowFunction();

//Dentro do objeto

const pessoa = {
    falar : function falar(){
        console.log("blá blá");
    },

    chorar(){
        console.log('chorando');
    }
}

pessoa.falar();

pessoa.chorar();