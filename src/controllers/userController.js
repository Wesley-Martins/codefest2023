const userModel = require("../db/models/userModel.js");

async function createUser(req, res) {
    const result = await userModel.createUser(req.body);

    res.status(201);
    res.json(result);
}

module.exports = {
    createUser
}
