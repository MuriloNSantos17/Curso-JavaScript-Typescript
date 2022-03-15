const request = obj =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method,obj.url,true);
    xhr.send();

    xhr.addEventListener('load',()=>{
        if(xhr.status >=200 && xhr.status<300){
            obj.success(xhr.responseText);
        }else{
            obj.error({
                cod: xhr.status,
                msg: xhr.statusText
            })
        }
    })
}

document.addEventListener('click',(evt)=>{
    const el = evt.target;
    const tag = el.tagName.toLowerCase();
    
    if(tag ==='a') 
    {
        evt.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el)
{
    const href = el.getAttribute('href');
    console.log(href);
    request({
        method: 'GET',
        url: href,
        success(response){
            carregaResultaddo(response)
        },
        error(errorTex){
            console.log(errorTex);
        }
    });
}

function carregaResultaddo(response){
    var resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}