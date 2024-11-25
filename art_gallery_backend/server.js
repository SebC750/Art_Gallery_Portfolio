const express = require('express');
const app = express();

app.get('/', (req,res) => {
    try{
       res.send("Welcome to the API server!");
    }catch(e){
        console.log("Error: ", e);
    }
})

const artRouter = require('./controllers/artController');
const blogRouter = require('./controllers/blogController');

app.use("/artwork", artRouter);
app.use("/blog", blogRouter);
app.listen(3000);