//PRIMEIRO ARRAY

const numeros=[1,2,3];

const [dois,tres,um] = numeros;

console.log(dois);

//Objetos

function retornaPessoa(nome,idade,rua,numero)
{
    return {
        nome,
        idade,
        endereco: {
            rua,
            numero
        }
    }
}

var aluno1 = retornaPessoa('Murilo',22,'Dois Vizinhos',310);

console.log(aluno1);

const {nome,idade, endereco:{rua,numero}} = aluno1;

console.log(nome);
console.log(idade);
console.log(rua);
console.log(numero);



