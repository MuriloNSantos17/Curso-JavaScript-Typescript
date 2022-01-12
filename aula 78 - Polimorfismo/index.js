function CriaConta(agencia, numeroConta, saldo)
{
    this.agencia = agencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}


CriaConta.prototype.sacar = function(valor){
    if(valor > this.saldo)
    {
        console.log("Saldo Insuficiente!");
        this.verSaldo();
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
conta1.sacar(30);