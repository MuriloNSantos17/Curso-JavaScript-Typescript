function helloWorld()
{
    console.log('Olá Mundo');
}

class ControleRemoto{
    constructor (tv){
        this.tv = tv;
        this.volume =0;
        helloWorld();
    }

    //MÉTODOS INSTÂNCIA
    aumentar(){
        this.volume++;
    }

    diminuir(){
        this.volume--;
    }

    static trocarPilha(){
        console.log('troquei pilha')
    }
}

const controle1 = new ControleRemoto('LG');

console.log(controle1);

controle1.aumentar();

console.log(controle1);

ControleRemoto.trocarPilha();