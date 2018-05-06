const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/dev');

const recipeRoutes = require('./routes/recipes');
const commentRoutes = require('./routes/comments');

mongoose.connect(keys.mongoURI, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

const app = express();
app.use(bodyParser.json());

app.use("/api/recipes",  recipeRoutes);
app.use("/api/recipes/:recipe_id/comments", commentRoutes);

const PORT = 8081;


app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`);
});