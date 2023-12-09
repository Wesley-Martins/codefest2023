const db = require("./connection.js");

async function createUser(user) {
    const cpf = user.cpf;
    const name = user.name;
    const email = user.email;
    const telephone = user.telephone;
    let giftNumber = '';

    for(let i=0; i<8; i++) {
        let randomNumber = `${Math.floor(Math.random() * (9 - 0 + 1)) + 0}`;
        
        giftNumber += randomNumber;
    }

    const query = `INSERT INTO users(name, cpf, email, telephone, gift_number) VALUES(?, ?, ?, ?, ?)`;

    db.run(query, [name, cpf, email, telephone, giftNumber], (err) => {
        if(err) throw err;
    })

    const result = await new Promise((resolve, reject) => {
        db.get(`SELECT gift_number FROM users WHERE gift_number = ?`, [giftNumber], (err, rows) => {
            if(err) throw err

            resolve(rows)
        })
    })

    return result
}

module.exports = {
    createUser
}
