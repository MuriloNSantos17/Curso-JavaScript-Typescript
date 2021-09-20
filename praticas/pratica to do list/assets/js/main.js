let tarefas = document.querySelector('.tarefas');
let novaTarefa = document.querySelector('.input-tarefa');
let botao = document.querySelector('.botao-adicionar');



function criaBotao()
{
    const botao = document.createElement('button');
    botao.innerText = "Remover";
    botao.setAttribute('class','Apagar');

    return botao;
}


function limpaInput()
{
    novaTarefa.value = '';
    novaTarefa.focus();
}

function criaLi(tarefa)
{
    const li = document.createElement('li');
    li.innerText = tarefa + ' ';
    const botao = criaBotao();
    li.appendChild(botao);
    limpaInput();
    return li;
}


function criaTarefa(texto){
    const  dadoLi = criaLi(texto);
    tarefas.appendChild(dadoLi);
}

botao.addEventListener('click', function(){
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    salvarElementos();
});

novaTarefa.addEventListener('keypress',function(e){

    if(e.keyCode ==13)
    {
        if(!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
        salvarElementos();
    }
});


document.addEventListener('click', function(event){
    const elemento = event.target;

    if(elemento.classList.contains('Apagar'))
    {
        const elementoPai = elemento.parentElement;
        elementoPai.remove();
        salvarElementos();
    }
});


function salvarElementos()
{
    var listaTarefasGlobais =[];

    const listaTarefas = tarefas.querySelectorAll('li');
    console.log(listaTarefas);

    

    for(tar of listaTarefas)
    {
        var texto = tar.innerText;
        texto = texto.replace('Remover','').trim();
        listaTarefasGlobais.push(texto);
    }

    const tarefasJson = JSON.stringify(listaTarefasGlobais);

    localStorage.setItem('novasTarefas',tarefasJson);
}

function carregaTarefas()
{
    const tarefas = localStorage.getItem('novasTarefas');

    
    const listaTarefasStorage = JSON.parse(tarefas);

    console.log(listaTarefasStorage);

    for(tar of listaTarefasStorage)
    {
        criaTarefa(tar);
    }
    

}

carregaTarefas();