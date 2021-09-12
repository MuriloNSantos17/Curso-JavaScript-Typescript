var container = document.querySelector('.container');

var paragrafos = container.querySelectorAll('p');

var estilos = getComputedStyle(document.body);

var backgroundColorBody = estilos.backgroundColor;


for(p of paragrafos)
{
    p.style.backgroundColor=backgroundColorBody;
    p.style.color='#ffffff';
}
