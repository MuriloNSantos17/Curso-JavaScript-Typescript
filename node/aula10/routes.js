const express = require('express');

const routes = express.Router();

const controlPages = require('./src/controllers/controlPages')

routes.get('/',controlPages.showFirstPage);

module.exports = routes;