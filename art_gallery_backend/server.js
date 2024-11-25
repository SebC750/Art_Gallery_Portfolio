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
const userRouter = require('./controllers/userController');
const commentRouter = require("./controllers/commentController");

app.use("/artwork", artRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter)
app.listen(3000);