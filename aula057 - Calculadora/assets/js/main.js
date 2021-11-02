function criaCalculadora()
{
    return {

        inicia: function(){
            this.cliqueBotoes();
            
        },

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay(){
            this.display.value='';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            const result = eval(this.display.value);

            this.clearDisplay();
            this.btnParaDisplay(result);
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num'))
                {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear'))
                {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del'))
                {
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq'))
                {
                    this.realizaConta();
                }


            }.bind(this))
        },

        btnParaDisplay(value)
        {
           this.display.value += value;
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();