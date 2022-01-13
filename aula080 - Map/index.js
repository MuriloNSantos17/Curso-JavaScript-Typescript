const pessoas = [
    {nome:'Sarah',id:1},
    {nome:'Gustavo',id:6},
    {nome:'Nicolas',id:4}
];

/*const novasPessoas = {};

for(pessoa of pessoas){
    
    const {id} = pessoa;

    novasPessoas[id] = {...pessoa};
}
*/

const novasPessoas = new Map();

for(pessoa of pessoas)
{   
    const {id} = pessoa;

    novasPessoas.set(id,{...pessoa});
}
console.log(novasPessoas);

console.log(novasPessoas.get(6));