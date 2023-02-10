require('dotenv').config();

const express = require('express');
const routes = express.Router();

const controlUsuario = require('./src/controller/controlUsuario')


routes.get('/',(req,res)=>{
    res.send('Olá Mundo!')
});

routes.post('cadastrar/',(req,res)=>{
    controlUsuario.createUser(req,res)
})

module.exports = routes;