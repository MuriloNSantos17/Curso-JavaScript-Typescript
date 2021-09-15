const divParagrafos = document.querySelector('.paragrafos');

//GETALL PARAGRAFOS DA DIV
const tagsP = divParagrafos.querySelectorAll('p');
console.log(tagsP);
//PEGA TODOS ESTILOS DO BODY
const stylesBody = getComputedStyle(document.body);

//PEGANDO O BACKGROUND DO BODY
const backgroundColor = stylesBody.backgroundColor;

//console.log(backgroundColor);


for(p of tagsP)
{
    p.style.backgroundColor=backgroundColor;
    p.style.color='White';
}