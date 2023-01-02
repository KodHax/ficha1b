const mongoose = require("mongoose");
const Schema = mongoose.Schema; 


const pratos = new Schema({

    idprato:{
        type:Number,
        require:true,
    },
    nome_do_prato:{
        type:String,
        require:true,
    },
    categoria_do_prato:{
        type:String,
        require:true,
    },
    ingredientes:{
        type:Array,
        require:true,
    },
},
{    
        timestamps: true

})

module.exports = mongoose.model("menu_do_dia", pratos , "menu_do_dia")