const express = require("express");
const app = express(); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const errorHandler = require("./handlers/error");


const PORT = 8081;

app.use(cors()); 
app.use(bodyParser.json()); 

//all routes here

app.use(function(req, res, next){
    let error = new Error("Not Found")
    error.status = 404; 
    next(err); 
});

app.use(errorHandler); 

app.listen(PORT, function(){
    console.log(`Server is starting on port${PORT}`); 
})

