import express from "express"
const app = express();

app.get('/', (req,res) => {
    try{
       res.send("Welcome to the API server!");
    }catch(e){
        throw new Error(e);
    }
})

const artRouter = require('./src/routes/artController');
const userRouter = require('./src/routes/userController');
const commentRouter = require("./src/routes/commentController");

app.use("/artwork", artRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);

app.listen(3000);