const express = require('express');
const app = express();
const searchAlgorithm = require('./src/search-algorithms/search');


app.get("/", ( req, res) => res.send("Nothing to see here :v") )



app.get('/search-algorithms', searchAlgorithm.getResult );


module.exports = app;