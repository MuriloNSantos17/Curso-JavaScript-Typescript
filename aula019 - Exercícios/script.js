const people=[]; //Global Array


function criaObjeto(personName,personLastName,personWeight,personHeight){    
    return { 
        personName,
        personLastName,
        personWeight,
        personHeight
    }        
}


function insert(){

    var name = document.getElementById('txtName');
    var lastName = document.getElementById('txtLastName');
    var weight = document.getElementById('txtWeight');
    var height = document.getElementById('txtHeight');
    var divpeople = document.getElementById('people');

    //Create object
    var person= criaObjeto(name.value,lastName.value,weight.value,height.value);

    //push object into array
    people.push(person);

    console.log(people);

    divpeople.innerHTML += `<br>Nome: ${name.value} Sobrenome: ${lastName.value} Altura: ${height.value} Peso: ${weight.value}<br>`;


    name.value='';
    lastName.value="";
    weight.value="";
    height.value="";
}