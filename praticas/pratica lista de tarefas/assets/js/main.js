var listaTarefas = document.querySelector('.tarefas');
var botaoAdicionar = document.querySelector('.adicionar');
var tarefa = document.querySelector('.input-tarefa');


function criaBotao(li)
{
    const button = document.createElement('button');
    button.setAttribute('class','apagar');
    button.innerText = 'Apagar';
    li.innerText += ' ';
    li.appendChild(button);
   

}

function criaLi(texto)
{
    var li = document.createElement('li');
    li.innerText = texto;
    criaBotao(li);
    return li;
}

function limpaInput()
{
    tarefa.value='';
    tarefa.focus();
}

function novaTarefa(texto)
{
    const li = criaLi(texto);
    listaTarefas.appendChild(li);
    limpaInput();
    salvaTarefas();
}


botaoAdicionar.addEventListener('click',function(){
    if(!tarefa.value) return;

    novaTarefa(tarefa.value);

});

tarefa.addEventListener('keypress',function(e){
    if(e.keyCode===13)
    {
        if(!tarefa.value) return;

        novaTarefa(tarefa.value);
    }
});

document.addEventListener('click',function (e){
    const clique = e.target;

    if(clique.classList.contains('apagar'))
    {
        clique.parentElement.remove();
    }
});


function salvaTarefas()
{
    const listaTarefasArray = listaTarefas.querySelectorAll('li');
    
    const listTarefas =[];

    for(tarefaArray of listaTarefasArray)
    {
        let tarefaFinal = tarefaArray.innerText;
        tarefaFinal = tarefaFinal.replace('Apagar','').trim();
        listTarefas.push(tarefaFinal);
    }

    const listaTarefasJson = JSON.stringify(listTarefas);

    localStorage.setItem('listaExFinal',listaTarefasJson);

    console.log(listTarefas);
}


function carregaTarefas()
{
    const tarefasStorage = localStorage.getItem('listaExFinal');

    let listaTarefasArrayStorage = JSON.parse(tarefasStorage);

    for(list of listaTarefasArrayStorage)
    {
        novaTarefa(list);
    }
}

carregaTarefas();