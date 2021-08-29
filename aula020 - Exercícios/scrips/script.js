const pessoas =[];

function submeter(){
    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function criaObjeto (evento)
    {

        evento.preventDefault();
        
        //Procure nome dentro do form
        var nome = form.querySelector('.nome');
        var peso = form.querySelector('.peso');
        var altura = form.querySelector('.altura');
        var sobrenome = form.querySelector('.sobrenome');

        //Adicionando um objeto dentro do Array
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
           
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}`;

        console.log(pessoas);
    }
    
    form.addEventListener('submit', criaObjeto);

}

submeter();