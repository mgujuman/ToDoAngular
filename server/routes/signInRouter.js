const express = require("express");
const signInController = require("../controllers/signInController.js");

const signInRouter = express.Router();

signInRouter.post("", signInController.validate);

module.exports = signInRouter;

