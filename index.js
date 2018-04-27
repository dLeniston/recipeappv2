const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 8081;


app.listen(PORT, function(){
    console.log(`Server is listening on port ${PORT}`);
});