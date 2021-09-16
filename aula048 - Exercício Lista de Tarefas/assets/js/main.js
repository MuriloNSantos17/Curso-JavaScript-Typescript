var buttonAddTarefa = document.querySelector('.button-tarefa');
var listaTarefas = document.querySelector('.tarefas');
var tarefa = document.querySelector('.input-tarefa');

const listaDeTarefas=[];



function criaBotao(li)
{
    const botao = document.createElement('button');
    botao.innerText="Apagar";
    botao.setAttribute('class','botaoApagar')
    botao.setAttribute('title','Apagar Tarefa');
    li.innerText += ' ';
    li.appendChild(botao);
    
}


function criaLi(texto)
{    
    let li = document.createElement('li');
    li.innerText=texto;
    criaBotao(li);   
    return li;
}

function criaTarefa()
{
    if(!tarefa.value) return;
    const li = criaLi(tarefa.value);
    listaTarefas.appendChild(li);
    
    limparInput();
    salvarTarefas();
   
}

function limparInput()
{
    tarefa.value='';
    tarefa.focus();
}


tarefa.addEventListener('keypress', function(e){

    if(e.keyCode===13)
    {
        criaTarefa();
    }
});

buttonAddTarefa.addEventListener('click',function(){
    criaTarefa();
});

document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('botaoApagar'))
    {
        const liRemove = el.parentElement;        
        listaTarefas.removeChild(liRemove);
        salvarTarefas();
    }
    
});

function salvarTarefas()
{
    const tarefa = listaTarefas.querySelectorAll('li');
    const listaDeTarefas=[];

    for(let tr of tarefa)
    {
        let tarefaTexto = tr.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();

        listaDeTarefas.push(tarefaTexto);
    }

    const listaJSON = JSON.stringify(listaDeTarefas);

    localStorage.setItem('listaTarefas',listaJSON);
    
    console.log(listaDeTarefas);
}

function carregaTarefas()
{
    const tarefas = localStorage.getItem('listaTarefas');

    const listaStorage = JSON.parse(tarefas);

    console.log(listaStorage);

    for(dados of listaStorage)
    {
     
        tarefa.value = dados;
        criaTarefa();
    }

    limparInput();
    
}

carregaTarefas();


