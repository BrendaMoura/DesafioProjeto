//comanda as operações envolvendo o banco de dados e os produtos

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async buscar(req,res){
        //Pega do banco de dados
        //dessa forma a paginacao fica normal
        const { page = 1 } = req.query;
        //primeira parte é sobre os where, ou seja, as condicoes
        const products = await Product.paginate({},{page, limite:10});
        //retorna um arquivo JSON
        return res.json(products);
    },
    async acrescentar(req,res){
        //Acrescenta dados no banco de dados 
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async informacoes(req, res){
        //pega as informacoes do produto
        //pega o parametro id
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async atualizar(req, res){
        //new:true --> retorna o produto atualizado
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json(product);
    },
    async apagar(req, res){
        const product = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
};