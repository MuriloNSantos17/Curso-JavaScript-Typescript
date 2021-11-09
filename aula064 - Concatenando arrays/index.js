const a1 = [1,2,3];
const a2 = [4,5,6];

let a3 = a1+a2;

console.log(a3);

console.log(typeof(a3));

a3 = a1.concat(a2);

console.log(a3);
console.log(typeof(a3));

a3 = [...[2,3,4],...a1];


console.log(a3);