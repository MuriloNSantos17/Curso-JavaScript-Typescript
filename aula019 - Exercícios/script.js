var people=[];


function criaObjeto(name,lastname,weight,height){
    return [
        this.name = name,
        this.lastname= lastname,
        this.weight = weight,
        this.height = height
    ]
       
}


function adicionaObjeto(){
   
    var txtName = document.getElementById('txtName');
    var txtLastName = document.getElementById('txtLastName');
    var txtWeight = document.getElementById('txtWeight');
    var txtHeight = document.getElementById('txtHeight');
    
    var name = txtName.value;
    var lastname = txtLastName.value;
    var weight = txtWeight.value;
    var height = txtHeight.value;

    var person = criaObjeto(name,lastname,weight,height);

   
    people.push(person);
        

    var result = document.getElementById('result');


    result.innerHTML += `${person}`+'<br>';

    txtName.value="";
    txtLastName.value="";
    txtHeight.value="";
    txtWeight.value="";
}