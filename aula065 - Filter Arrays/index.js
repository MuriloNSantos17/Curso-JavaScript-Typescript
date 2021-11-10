//retorne números maiores que 10

const numeros = [5,50,80,1,2,3,5,7,11,15,22,27];

function callbackFilter(valor)
{
    return (valor > 10);
}

console.log(`Números: ${numeros}`);

const filtro = numeros.filter( valor => valor>10 );

console.log(`Filtro: ${filtro}`);


//retorne as pessoas que tem o nome com mais de 5 letras
//retorne as pessoas que tem idade maior de 50 anos
//retorne as pessoas que terminam o nome com letra A

const pessoas =[
    {nome:'Luiz',idade:63},
    {nome:'Murilo',idade:22},
    {nome: 'Débora',idade:24},
    {nome: 'Aline', idade:28}
];

function callbacFilterLetras(valor)
{
    const {nome} = valor;


    return nome.length > 5;
}


function callbackLetraA(valor)
{
    const {nome} = valor;

    let size = nome.length;

    size--;
  
    return nome[size].toLowerCase()==='a';

}

const filtroPessoasLetras = pessoas.filter(callbacFilterLetras);

const filtroPessoasIdade = pessoas.filter(valor => valor.idade >50 );

const filtroLetra = pessoas.filter(callbackLetraA);

console.log(filtroPessoasLetras);

console.log(filtroPessoasIdade);

console.log(filtroLetra);