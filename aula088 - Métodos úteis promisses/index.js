function random(max,min) {
    max*=1000;
    min*=1000;
    return Math.floor(Math.random() * (max-min) +min);
}


function timer(msg,tempo){    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(msg);
            resolve(msg);
        },tempo);
       
    });
}

/*
const teste  = timer('Olá Mundo',random(1,3)).then((res)=>{
    console.log(res);
}).catch((e)=>{
    console.log('ERROR: '+e)
});
*/

const promisses=
[
    timer('Olá Sarah',random(1,3)),
    timer('Olá Fran',random(1,3)),
    timer('Olá Nicolas',random(1,3))
];

//Resolve todas as promessas
Promise.all(promisses).then((valor)=>{
    console.log(valor)
});

//Executa a primeira promisse que der
Promise.race(promisses).then((valor)=>{
    console.log(valor)
});