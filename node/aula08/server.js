const { urlencoded } = require('body-parser');
const express = require('express');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.listen(3000);

app.get('/',(req,res)=>{
    res.send(`
        <form action="/" method="POST">
            Nome
            <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
});

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('Formulário Enviado!')
});

app.get('/teste/:id_usuario?/:parametro?',(req,res)=>{
    
    console.log(req.query)
    res.send(req.params);
})