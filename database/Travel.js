var Promise = require('bluebird');
var sqlite3 = Promise.promisifyAll(require('sqlite3').verbose());
var Travel = new sqlite3.Database('./travel.db');

var travelData = function() {
  return Travel.all(`SELECT * FROM events WHERE id=1`, function(err, rows) {
    if (err) console.error(err);
    else return rows;
  });
}

module.exports.travelData = travelData;