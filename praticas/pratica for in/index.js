const carros = ['BMW','FERRARI','MUSTANG'];

for(car in carros)
{
    console.log(carros[car]);
}

const pessoa={
    nome:"Murilo",
    sobrenome:"Santos"
}

for(key in pessoa)
{
    console.log(key.toUpperCase()+":",pessoa[key]);
}

carros.forEach((valor,indice)=>{
    console.log(valor,indice);
})