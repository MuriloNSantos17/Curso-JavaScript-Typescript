class ValidaFormulario{
    constructor(){       
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', evt =>{
            this.handleSubmit(evt);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.isInputValid();
        const senhasValidas = this.isPasswordValid();
        
        if(camposValidos && senhasValidas)
        {
            alert("Enviado");
            this.formulario.submit();
        }
    }

    isInputValid(){
        let valid=true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.input-validar')){
            
            let label = campo.previousElementSibling.innerText;
            
            if(!campo.value) 
            {
                this.criaErro(campo,'Erro no campo '+label.replace(':',''));
                valid=false;
            }

            if(campo.classList.contains('input-cpf')){
                if(!this.validaCpf(campo)) valid=false;
            }

            if(campo.classList.contains('input-usuario')){
                if(!this.validaUsuario(campo)) valid=false;
            }

        }

        return valid;
    }

    criaErro(campo,msg){
        const div = document.createElement('div');
        div.innerHTML=msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }

    validaCpf(campo){
        console.log(campo)
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo,'CPF inválido');
            return false;
        }

        return true;
    }

    validaUsuario(campo){
        let usuario = campo.value;


        if(usuario.length >12 || usuario.length<3){
            this.criaErro(campo,'Usuário precisa ter entre 3 e 12 caracteres!')
        }

        if(!usuario.match(/^[a-zA-z0-9]+$/g)){
            this.criaErro(campo,'Usuário precisa conter apenas letras e números')
        }

        return true;
    }

    isPasswordValid(){
        let valid = true;

        let senha = document.getElementById('input-senha');
        let confirmarSenha = document.getElementById('input-confirmar-senha');

        if(senha.value!==confirmarSenha.value){
            valid=false;
            this.criaErro(senha,'Os campos de senha precisam ser iguais');
            this.criaErro(confirmarSenha,'Os campos de senha precisam ser iguais');
        }

        if(senha.value.length <6 || senha.value.length >12){
            this.criaErro(senha,'O Campo senha deve ter entre 6 e 12 caracteres');
            valid = false;
        }

        return valid;
    }
}

const valida = new ValidaFormulario();