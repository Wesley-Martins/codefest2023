const express = require("express");

const router = express.Router();
const userController = require("./controllers/userController.js");

router.post("/create", userController.createUser);

module.exports = router;
