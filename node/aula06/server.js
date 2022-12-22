const express = require('express');
const app = express(); //Carregamos o express


app.get('/',(req,res)=>{
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `);
});


app.post('/',(req,res)=>{
    res.send("Obrigado por entrar em contato!")
});

app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato conosco!');
})


app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
}); //Porta usada para aplicação