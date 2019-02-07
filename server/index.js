var express = require('express');
var bodyParser = require('body-parser');
var { travelData } = require('../database/Travel.js');

var app = express();
var PORT = 3001;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/attraction_product_detail', (req, res) => {
  travelData()
  .then(data => res.send(data))
  .catch(() => res.sendStatus(500));
});









app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})