class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g,''),
            enumerable: true,
        })
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos+digito1);

        this.novoCpf= cpfSemDigitos + digito1 + digito2;
    }



    geraDigito(cpfSemDigitos)
    {
        let total=0;
        let reverso=cpfSemDigitos.length +1;

        for(let valorString of cpfSemDigitos)
        {
            total+= (reverso*Number(valorString))
            reverso--;
        }

        const digito1 = 11- (total%11);

        return digito1 <=9? String(digito1): '0';
       
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof(this.cpfLimpo)!='string') return false;
        if(this.cpfLimpo.length !==11) return false;
        if(this.isSequencia()) return false
        this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
        
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}

//const isValid = new ValidaCpf('062.347.739-40');

//console.log(isValid.valida());