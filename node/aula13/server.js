const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const meuMiddleware = require('./src/middleware/middleware');


app.use(urlencoded({extended:true}))
app.use(express.static(path.resolve(__dirname,'public')))
app.use(meuMiddleware);


app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine','ejs');



app.use(routes);


app.listen(3000,()=>{
    console.log('Servidor running');
})