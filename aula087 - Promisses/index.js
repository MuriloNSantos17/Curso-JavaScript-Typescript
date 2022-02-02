function rand(max,min){
    max*=1000;
    min*=1000;

    return Math.floor(Math.random() * (max-min) + min)
}

function timer(tempo,msg){
    
    return new Promise((resolve, reject) =>{
        if(typeof msg != 'string') reject('Bad value');
        setTimeout(()=>{
            console.log("Promisse executada!")
            resolve(msg);
        },tempo);
    });
    
}

const frase1 = timer(rand(1,3),10).then((resposta)=>{
    console.log(resposta)
}).catch((e)=>{
    console.log('ERROR: '+e)
});
