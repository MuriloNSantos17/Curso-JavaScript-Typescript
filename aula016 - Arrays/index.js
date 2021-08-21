const nomes = ['Murilo','Lucca','Evandro','Nataly'];

console.log(nomes);

nomes[4] = "Sara"; //Adicionando um novo valor em uma posição específica.
console.log(nomes);


nomes.push("Elsa"); //Adicionando valor sem saber a posição 
console.log(nomes);

nomes.unshift("Nicolas"); //Adicionando valor no primeiro indice
console.log(nomes);

var usuarioRemovido = nomes.pop(); //Remove o ùltimo indice 

console.log(`O usuário removido foi: ${usuarioRemovido}`); 

usuarioRemovido = nomes.shift(); //Remove o primeiro

console.log(`O usuário removido inicial: ${usuarioRemovido}`);

delete nomes[1]; //deleto indice específico 

console.log(nomes);

//imprime por indice

console.log(nomes.slice(0,2));

//Imprime todos menos o último

console.log(nomes.slice(0,-1));