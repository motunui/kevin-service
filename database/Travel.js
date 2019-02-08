var Promise = require('bluebird');
var sqlite3 = Promise.promisifyAll(require('sqlite3').verbose());
var Travel = new sqlite3.Database('./travel.db');

var travelData = function() {
  var randomId = Math.round(Math.random() * 100);
  return Travel.all(`SELECT * FROM events WHERE id=${randomId}`, function(err, rows) {
    if (err) {
      console.error(err);
    } else {
      console.log(rows);
      return rows;
    }
  });
}

var a = 'random change for pull request review';
// Adding a comment as change for review1 branch.


module.exports.travelData = travelData;