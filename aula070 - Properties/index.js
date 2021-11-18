function Produto(nome,preco,estoque)
{
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this,'estoque',{
        enumerable: true, //se a chave aparece
        value: estoque, //valor
        writable: false, //se pode ser alterada
        configurable: false //Posso configurar, apagar chave do objeto?
    });
    
}

const produto1 = new Produto('camiseta',20,3);

console.log(produto1);