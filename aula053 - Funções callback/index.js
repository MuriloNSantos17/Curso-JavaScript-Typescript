function rand(max=1000, min=3000)
{
    const valor = Math.random() * (max-min) +min;

    return Math.floor(valor);
}


function f1(callback)
{
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    },rand());
    
}

function f2(callback)
{
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    },rand());
    
}

function f3(callback)
{
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    },rand());
    
}

//CALLBACK HELL \m/
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo');
        });
    });
});

//JEITO CERTO

f1(f1callback);

function f1callback()
{
    f2(f2callback);
}


function f2callback()
{
    f3(f3callback);
}

function f3callback()
{
    console.log('Olá Mundo');
}