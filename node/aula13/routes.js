const express = require('express');

function meuMiddleware(req,res,next){
    req.session = {nome:"Murilo"};
    console.log()
    console.log('passei no Middleware')
    console.log()
    next();
}

const routes = express.Router();

const controlPages = require('./src/controllers/controlPages')

routes.get('/', controlPages.showFirstPage);

module.exports = routes;