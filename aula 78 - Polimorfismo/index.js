function CriaConta(agencia, numeroConta, saldo)
{
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}


CriaConta.prototype.sacar = function(valor){
    if(valor > this.saldo)
    {
        console.log(`Saldo Insuficiente!\nSaldo Atual ${this.saldo}`);
        //this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

CriaConta.prototype.depositar = function(valor){
    this.saldo+=valor;
    this.verSaldo();
}

CriaConta.prototype.verSaldo = function()
{
    console.log(`Saldo: ${this.saldo}`);
}

const conta1 = new CriaConta(10,236,10);
conta1.depositar(20);
conta1.sacar(31);

function ContaCorrente(agencia,numeroConta,saldo,limite)
{
    CriaConta.call(this,agencia,numeroConta,saldo);

    this.limite = limite;
}

ContaCorrente.prototype = Object.create(CriaConta.prototype);
ContaCorrente.prototype.constructor= ContaCorrente;


ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo+this.limite))
    {
        console.log(`Saldo Insuficiente!\nSaldo Atual ${this.saldo}`);
        //this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const conta2 = new ContaCorrente(23,963,100,200);
console.log(conta2);

conta2.sacar(400);

