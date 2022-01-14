class DispositivoEletronico{
    constructor (nome){
        this.nome = nome;
        this.ligado =false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Celular');

class Smartphone extends DispositivoEletronico{
    constructor(nome,cor){
        super(nome); //Esse super se refere a classe de modelo no caso Dispositivo eletronico
        this.cor = cor;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome,hasWifi){
        super(nome),
        this.hasWifi = hasWifi;
    }

    ligar(){
        console.log("Alterei o método ligar");
    }
}

const samsung = new Smartphone('S10','Preto');
samsung.ligar();

console.log(samsung);

const tablet = new Tablet('Motorola',true);

console.log(tablet);
tablet.ligar();