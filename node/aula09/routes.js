const express = require('express');

const homeControle = require('./controllers/homeController');

const routes = express.Router();

routes.get('/',homeControle.paginaInicial);

module.exports = routes;