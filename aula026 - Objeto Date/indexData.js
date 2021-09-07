
function formataDiaMes(num){
    return num<10?`0${num}`:num;
}

function formataData(data){
    let day = data.getDate();
    let month = data.getMonth()+1;
    const year = data.getFullYear();

    month = formataDiaMes(month);
    day = formataDiaMes(day);
    
    const dataFormatada = `${day}/${month}/${year}`;
    
    return dataFormatada;
}

let data = new Date();

var resultado = formataData(data);

console.log(resultado);
