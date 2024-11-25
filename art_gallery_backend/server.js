const express = require('express');
const app = express();

app.get('/', (req,res) => {
    try{
       res.send("Hello world!");
    }catch(e){
        console.log("Error: ", e);
    }
})

const artRouter = require('./controllers/artController');
const blogRouter = require('./controllers/blogController');

app.listen(3000);