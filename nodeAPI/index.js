const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//Inicia o app
const app = express();
//permite o envio de informacoes no formato JSON para a aplicacao
app.use(express.json);
//permite acesso a tds os dominios
app.use(cors());

//inicia o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeAPI",
    {useNewUrlParser:true,
    useUnifiedTopology:true}
);

//registra os models na aplicacao
requireDir('./src/models');

const Product = mongoose.model('Product');

//recebe tds os tipos de requisição
//td vez que receber uma requisicao de "/api", vai enviar routes
app.use('/api', require("./src/routes"));

//passa a ouvir a porta 3333
app.listen(3333);