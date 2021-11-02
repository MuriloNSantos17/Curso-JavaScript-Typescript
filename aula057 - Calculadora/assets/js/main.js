function criaCalculadora()
{
    return {
    
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia: function(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value='';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },

        realizaConta(){
            try {
                
                const result = eval(this.display.value);
                this.clearDisplay();
                this.btnParaDisplay(result);

            } catch (error) {
                window.alert('Erro');
                return;
            }
            
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

                this.display.focus();


            }.bind(this))
        },

        btnParaDisplay(value)
        {
           this.display.value += value;
        },

        pressionaEnter()
        {
            this.display.addEventListener('keyup',(e)=>{
                if(e.keyCode==13)
                {
                    this.realizaConta();
                }
            });
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();