const elementos =[
    {tag: 'p',texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

var resultado = document.querySelector('.container');

var div = document.createElement('div');


for(i=0;i<elementos.length;i++)
{
    const {tag,texto} = elementos[i];
    
    
    var tagCriada = document.createElement(tag);
    //Criação do texto dentro do DOM
    var textoNode = document.createTextNode(texto);

    tagCriada.appendChild(textoNode);
    
    div.appendChild(tagCriada);
}

resultado.appendChild(div);