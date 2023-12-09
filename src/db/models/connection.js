const sqlite = require("sqlite3");

const db = new sqlite.Database("src/db/models/users.db");
const query = `CREATE TABLE IF NOT EXISTS users(
    name VARCHAR(100),
    cpf INTEGER PRYMARY KEY,
    email VARCHAR(100),
    telephone INTEGER,
    gift_number INTEGER
)`

db.run(query, (err) => {
    if(err) throw err;
})

module.exports = db;
