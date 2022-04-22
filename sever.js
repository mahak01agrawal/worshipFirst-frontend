const express = require("express");
const path = require("path");

const app= express();

app.use(express.static('./dist/worshipFirst-frontEnd'));
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:'dist/worshipFirst-frontEnd'})
});
app.listen(process.env.PORT || 3000);