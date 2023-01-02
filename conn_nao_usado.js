const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;
const mongoose = require("mongoose");
const autentic = require("./models/autentic");
const url = "mongodb://localhost:27017";
const dbName = "app_menu"; //Colocar o nome da Base de dados em Questão
const connect = mongoose.connect(url, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true
});


connect.then((db) => {
    console.log("Connected correctly to server");
    app.use((req, res, next) => {
        let autenticar = require("./controllers/menu_do_dia")
        app.use('/autentic',autentic) 
        app.use(autentic)({
            autentic:{'username':'password'}
        })

    })
    console.log("sv Base dados a correr!!")
    app.listen(port, () => console.log('Puxar dados da app!'))
});


