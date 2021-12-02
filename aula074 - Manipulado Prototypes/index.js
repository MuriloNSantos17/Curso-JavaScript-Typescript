const ObjetoA = {
    chaveA: 'A'
}

const ObjetoB = {
    chaveB: 'B',
    
}

Object.setPrototypeOf(ObjetoB, ObjetoA);

console.log(ObjetoA);

console.log(ObjetoB);

const Produto = function(nome,valor)
{
    this.nome = nome;
    this.valor = valor;
}

Produto.prototype.aumentaPreco = function(percentual){
    this.valor = this.valor + ( this.valor *  ( percentual/100) );
}

Produto.prototype.desconto = function(percentual)
{
    this.valor = this.valor - (this.valor * (percentual/100));

}

const p1 = new Produto('Camiseta',10);
p1.aumentaPreco(100);
p1.desconto(50);

console.log(p1);

const Celular =  function celular(nome,valor)
{
    this.nome = nome;
    this.valor = valor;
}

const cel = new Celular('xiaomi',100);

//copiando proto de um Objeto pro outro
Object.setPrototypeOf(cel,Produto.prototype);

cel.aumentaPreco(10);

console.log(cel);