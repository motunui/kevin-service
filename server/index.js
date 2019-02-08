var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var { getTravelData } = require('../database/Travel.js');

var app = express();
var PORT = 3004;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/events', (req, res) => {
  getTravelData()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => console.error(err));
});

// app.get('/api/events/:id', (req, res) => {
//   var eventId = parseInt(req.params.id);
//   travelDataFindById(eventId);
//   .then(data => console.log(data))
//   .catch((err) => console.error(err));
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})