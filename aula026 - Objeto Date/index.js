const data = new Date();

//Retorna o dia da data
let day = data.getDate();
console.log(`Dia ${day}`);

//Retorna o dia da semana
day = data.getDay();
console.log(`Dia da Semana ${day}`);

//Mês + 1 pois JAN = 0
let month = data.getMonth()+1;
console.log(`Mês ${month}`);

//Ano
console.log(`Ano ${data.getFullYear()}`);
