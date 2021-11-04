function Calculadora(){

    display = document.querySelector('.display');
    
    this.inicia= ()=>{
        cliqueDosBotoes();
        botaoEnter();
    };

    function botaoEnter()
    {
        this.display.addEventListener('keyup',e=>{

            

            if(e.keyCode===13)
            {
                calcular();
            }
        })
    }


    function cliqueDosBotoes()
    {
        document.addEventListener('click', e =>{
            const el = e.target;

            if(el.classList.contains('btn-num'))
            {
                this.display.value += el.innerText;
            }
            if(el.classList.contains('btn-del'))
            {
                apagaUm();
            }
            if(el.classList.contains('btn-clear'))
            {
                clear();
                this.display.focus();
            }
            if(el.classList.contains('btn-eq'))
            {
                calcular();
            }
        });
    };

    function apagaUm()
    {
        let valor = this.display.value;
        valor = valor.slice(0,-1);

        this.display.value=valor;
    };

    function clear()
    {
        this.display.value="";
    };

    function calcular()
    {
        try 
        {
            let resultado = eval(this.display.value);

            this.display.value=resultado;
        } 
        catch (error) 
        {
            window.alert("Erro: tente novamente");
            clear();
        }
        
    }

}


var calculadora = new Calculadora();
calculadora.inicia();
