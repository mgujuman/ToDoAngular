const express = require("express");
const signUpController = require("../controllers/signUpController.js");

const signUpRouter = express.Router();

signUpRouter.post("", signUpController.signUp);

module.exports = signUpRouter;

