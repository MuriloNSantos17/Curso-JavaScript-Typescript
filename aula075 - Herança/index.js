function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(valor){
    this.preco +=valor;
}

function Camiseta(nome,preco,cor)
{
    Produto.call(this,nome,preco);
    this.cor = cor;
}

Camiseta.prototype = new Object(Produto.prototype);

const camisa = new Camiseta('camiseta',20,'branca');


camisa.aumento(20);

console.log(camisa);

