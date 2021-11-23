function Produto(nome,valor,estoque)
{
    this.nome =nome;
    this.valor=valor;

    let estoquePrivado = estoque;

    Object.defineProperty(this,'estoque', {
        enumerable:true,

        get: function()
        {
            return estoquePrivado;
        },

        set: function(valor)
        {
            if(isNaN(valor))
            {
                console.log("Não é um numero");
                return;
            }
            estoquePrivado = valor;
        }
    })
    
    
}

const produto = new Produto('Camiseta',100,10);

produto.estoque=100;

console.log(produto.estoque);