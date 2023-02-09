require('dotenv').config();
const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');



mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log('conexão com mongo sucesso!')
    app.emit('pronto');
}).catch((err)=>{
    console.log('ERRO')
    console.log(err);
});



const path = require('path');
const routes = require('./routes');
const meuMiddleware = require('./src/middleware/middleware');


app.use(urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')))
app.use(meuMiddleware);


app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine','ejs');



app.use(routes);


app.on('pronto',()=>{

    app.listen(3000,()=>{
        console.log('Servidor running');
    })
})
