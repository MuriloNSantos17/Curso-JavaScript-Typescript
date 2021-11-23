const produto = {nome: 'Caneca', preco: 1.8};


const produto2 = {... produto}; //Usando spred operator

produto2.nome = "Camiseta";

console.log(produto);


const produto3 = Object.assign({},produto);

console.log(produto2);

console.log(produto3);

//Imprime as configurações do Objeto properties
console.log(Object.getOwnPropertyDescriptor(produto3,'nome'));

//Imprime chaves
console.log(Object.keys(produto3));

//Imprime valores
console.log(Object.values(produto3));

//Imprime ambos
console.log(Object.entries(produto3));

//Iterar

for( let[chave,valor] of Object.entries(produto3))
{
    console.log(chave,valor);
}