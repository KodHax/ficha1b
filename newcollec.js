const express=require('express')
const app = express()
app.use(express.json)
const port = 4000
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017"
const dbname = "app_menu"
const connect = mongoose.connect(url, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true
});
