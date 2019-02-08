// var Promise = require('bluebird');
// var sqlite3 = Promise.promisifyAll(require('sqlite3').verbose());
// var Travel = new sqlite3.Database('./travel.db');
var Travel = require('./index.js');

var getTravelData = function() {
  var randomId = Math.floor(Math.random() * 100);
  console.log('getTravelData is invoked');
  return Travel.getAsync(`SELECT * FROM events WHERE id=${randomId}`)
    .then((rows) => {
      console.log("Promise resolved");
      console.log(rows);
      return rows;
    })
    .catch((err) => console.error(err));
};

module.exports.getTravelData = getTravelData;