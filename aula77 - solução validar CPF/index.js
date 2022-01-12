function ValidaCpf(cpfEnviado){
    Object.defineProperty(this,'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
    });
}

ValidaCpf.prototype.valida = function()
{
    if (typeof this.cpfLimpo ==='undefined') return false;
    if (this.cpfLimpo.length!=11) return false;
    if (this.isSequencia()===true) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    
    const digito1 = this.CriaDigito(cpfParcial);
    const digito2 = this.CriaDigito(cpfParcial+digito1)
    const novoCPF = cpfParcial + digito1+ digito2;

    return novoCPF ===this.cpfLimpo;
    
}

ValidaCpf.prototype.CriaDigito = function(cpfParcial)
{
    const cpfArray = Array.from(cpfParcial);

    //console.log(cpfArray);

    let regressivo = cpfArray.length +1;

    const total = cpfArray.reduce( (ac,val)=>{
        //console.log(regressivo, val, regressivo * val);
        
        ac += (regressivo* Number(val));
        regressivo--;
        return ac;
    },0);

    //console.log(total);
    
    const digito = 11 - (total % 11);

    return digito > 9 ? '0': String(digito);
}

ValidaCpf.prototype.isSequencia = function(){
    //console.log(this.cpfLimpo);
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    //console.log(sequencia === this.cpfLimpo)
}

const cpf = new ValidaCpf('705.484.450-52')

console.log(cpf.valida());