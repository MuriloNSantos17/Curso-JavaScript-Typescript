function criaPessoa(nome,sobrenome,peso,altura)
{
    return {
        nome,
        sobrenome,
        altura,
        peso,

        set nomeCompleto(nomeCompleto)
        {
            nomeCompleto = nomeCompleto.split(' ');
            this.nome = nomeCompleto.shift();
            this.sobrenome = nomeCompleto.join(' ');

        },

        get nomeCompleto()
        {
            return nome + ' ' +sobrenome;
        },

        fala(assunto){
            console.log(`Falando sobre ${assunto}`);
        },
        get imc(){
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
    };
}


const pessoa = criaPessoa('Murilo','Santos',123,1.7);


pessoa.fala("JavaScript");
pessoa.nomeCompleto = "Murilo Nunes dos Santos";

console.log(pessoa.nomeCompleto);
console.log(pessoa.nome);
console.log(pessoa.sobrenome);