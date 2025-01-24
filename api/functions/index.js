const express = require("express");
const app = express();
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const artRoutes = require("./routes/artRoutes")
const userRoutes = require("./controllers/userRoutes")
const commentRoutes = require("./controllers/commentRoutes")

app.use(express.json())

app.use("/artworks", artRoutes);
app.use("/users", userRoutes);
app.use("/comments", commentRoutes);

exports.api = onRequest(app)
