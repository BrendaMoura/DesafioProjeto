const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductCampos = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    imagem:{
        type: String
    },
    precoAtual:{
        type:String
    },
    precoAntigo:{
        type: String
    },
    parcela:{
        type:String
    }
});

ProductCampos.plugin(mongoosePaginate);

//define o modelo do banco de dados
mongoose.model('Product', ProductCampos);