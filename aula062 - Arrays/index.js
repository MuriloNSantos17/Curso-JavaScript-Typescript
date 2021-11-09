const nomes= ['Maria','Gustavo','Murilo'];

console.log(nomes);

delete nomes[2];

console.log(nomes)

const times = new Array('Athlético','Santos','São Paulo');

console.log(times);

const equipes = times;

console.log(equipes);

equipes.pop();

//Times perde por referência
console.log(equipes);
console.log(times);

//add no array
times.push("Coritiba");

console.log(times);

//add na primeira posição
times.unshift('Palmeiras');

console.log(times);

//Remove o primeiro
times.shift();

console.log('Times');
console.log(times);

const novosTimes = times.slice(0,-1);

console.log(novosTimes);

const nome = "Murilo Nunes dos Santos";

let newNome = nome.split(" ");

console.log(newNome);
