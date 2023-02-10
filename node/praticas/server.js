const express = require('express');
const mongoose = require('mongoose')
const app = express();
const {urlencoded} = require('body-parser');
const routes = require('./routes');

app.use(urlencoded({extended: true}));

mongoose.set('strictQuery',true);

mongoose.connect(process.env.CONNECTIONSTRING).then(()=>{
    console.log('Conectei')
    app.emit('ready');
})


app.use(routes);

app.on('ready',()=>{
    
    app.listen(3000,()=>{
        console.log('Servidor rodando!')
    });
    
})

