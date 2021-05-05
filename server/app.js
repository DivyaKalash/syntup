const express = require("express");
const app =express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const PORT = 8080
const {MONGOURI} = require("./keys")


app.use(bodyParser())


mongoose.connect(MONGOURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.on("connected",()=>{
    console.log("connected to database");
})

mongoose.connection.on("error",(err)=>{
    console.log("error: ",err);
})

require("./models/user")

app.use(require("./route/auth"))

app.listen(PORT,()=>{
    console.log("server is running at port ",PORT);
})

