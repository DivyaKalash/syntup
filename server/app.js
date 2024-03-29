const express = require("express");
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const PORT = 5000
const {MONGOURI} = require("./keys");
const cors = require("cors");
app.use(express.static(__dirname + '/uploads'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.on("connected",()=>{
    console.log("connected to database");
})

mongoose.connection.on("error",(err)=>{
    console.log("error: ",err);
})

require("./models/user");

app.use(require("./route/auth"));
app.use(require("./route/admin/auth"));
app.use(require("./route/category"));
app.use(require("./route/services"));
app.use(require("./route/booking"));
app.use(require("./route/admin/initial"));


app.listen(PORT,()=>{
    console.log("server is running at port ",PORT);
})

