const express = require('express');
const app = express();
const searchAlgorithm = require('./src/search-algorithms/search');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


app.get("/", ( req, res) => res.send("Nothing to see here 👀") );



app.get('/search-algorithms', searchAlgorithm.getResult );


module.exports = app;