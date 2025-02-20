const express = require("express");
const app = express();
const {onRequest} = require("firebase-functions/v2/https");
const artRouter = require("./routes/artRouter")
const userRouter = require("./routes/userRouter")
const commentRouter = require("./routes/commentRouter")
const cookieParser = require("cookie-parser")
app.use(express.json())
app.use(cookieParser())
app.use("/artworks", artRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);


exports.api = onRequest(app)
