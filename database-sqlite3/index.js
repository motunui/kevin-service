var sqlite3 = require('sqlite3').verbose();
var faker = require('faker');

var db = new sqlite3.Database('travel.db', (err) => {
        if (err) console.error(err);
        else console.log("Database Created. ");
});

db.serialize(function() {
        db.run(`CREATE TABLE events(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                price_description TEXT NOT NULL,
                price REAL,
                overview TEXT NOT NULL,
                what_to_expect TEXT NOT NULL,
                important_info TEXT NOT NULL
                )`
        );

        var stmt = db.prepare(`INSERT INTO events (
                               name, 
                               price_description,
                               price,
                               overview,
                               what_to_expect,
                               important_info
                               ) VALUES (?, ?, ?, ?, ?, ?)`
        );

        for (var i = 0; i < 100; i++) {
                stmt.run(faker.lorem.words(), faker.lorem.sentence(), faker.commerce.price(), faker.lorem.paragraph(), faker.lorem.paragraph(), faker.lorem.text())
        }
        stmt.finalize();

        db.each(`SELECT id, name, price FROM events`, function(err, row) {
                console.log(`${row.id}: ${row.name} is ${row.price}`);
        })


});



db.close((err) => {
        if (err) console.error(err);
});
