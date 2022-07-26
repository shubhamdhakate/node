const express = require('express');
const dada = express();
dada.get('/api/main', function(req,res) {
    //res.send("Hi, Express JS");
    //res.send("<h1>Hi, Express JS HTML Tag</h1>");
    res.send({
        name : "shubha..m dhakate",
        age : 22,
        job :"software engineer",
    });
    
})
dada.listen(9090, function() {
    console.log("Server nning");
    
})