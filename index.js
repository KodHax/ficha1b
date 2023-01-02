const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");
const url = "mongodb://rodrigoalmeida:!Robras19ig@ac-vkp19gu-shard-00-00.xwbwzvq.mongodb.net:27017,ac-vkp19gu-shard-00-01.xwbwzvq.mongodb.net:27017,ac-vkp19gu-shard-00-02.xwbwzvq.mongodb.net:27017/?ssl=true&replicaSet=atlas-pc3bq9-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbName = "app_menu"; //Colocar o nome da Base de dados em Questão
const connect = mongoose.connect(url, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true
});


connect.then((db) => {
    console.log("Connected correctly to server");
    let pratos = require("./controllers/menu_do_dia")
    app.use('/pratos',pratos)
    app.use((req, res, next) => {
        
    })
    console.log("sv Base dados a correr!!")
    app.listen(port, () => console.log('Puxar dados da app!'))
});



