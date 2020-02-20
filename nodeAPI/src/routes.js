const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//rota de buscar
routes.get("/products",ProductController.buscar);
//rota de pegar as informacoes
routes.get("/products/:id",ProductController.informacoes);
//rota de acrescentar produto no banco de dados
routes.post("/products",ProductController.acrescentar);
//rota de atualizar produto
routes.put("/products/:id",ProductController.atualizar);
//rota de deletar produto
routes.delete("/products/:id",ProductController.apagar);
module.exports = routes;