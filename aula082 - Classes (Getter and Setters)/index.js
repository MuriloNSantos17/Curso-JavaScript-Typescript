const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] =0;
    }

    set velocidade(valor){
        if(typeof(valor) != 'number') return;
        if(valor >=100 || valor<=0) return; 
        this[_velocidade] =valor;
    }   

    get velocidade(){
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >=100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <=0) return;
        this[_velocidade]--;
    }

}


const fusca = new Carro('Fusca');

for(i=0; i<=100; i++)
{
    fusca.acelerar();
}

//Ignorou completamente esta parte e manteve os 100 do FOR
fusca.velocidade = 12;

console.log(fusca.velocidade);