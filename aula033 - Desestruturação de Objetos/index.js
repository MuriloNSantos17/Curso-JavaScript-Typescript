
const pessoas={
    
    nome: "Murilo",
    idade: 22,
    cargo: "Desenvolvedor Júnior",
    endereco:{
        rua: "Dois vizinhos",
        numero: 320,
    }
}

//Mudei o nome da variável
const {nome:rex} = pessoas;

//desestruturei o objeto 
const {endereco : {rua,numero} } =pessoas;

//impressão do nome com o nome da variável alterado
console.log(rex);

//impressao da rua

console.log(rua);

//Resto do objeto

const {nome,...resto} = pessoas;

console.log('Just nome: ',nome);

console.log('Resto do objeto: ',resto);