const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/dev');

const Recipe = require('./models/Recipe');
const recipeRoutes = require('./routes/recipes');

mongoose.connect(keys.mongoURI, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

const app = express();
app.use(bodyParser.json());

app.use("/api/recipes",  recipeRoutes);

const PORT = 8081;


app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`);
});