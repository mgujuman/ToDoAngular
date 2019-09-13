const User = require("../models/user.js");

exports.validate = (req, res) => {
    console.log('connected successfully, email is ',req.body.email,' password is ',req.body.password);
    if (req.body.email === "Vasya@mail.ru" && req.body.password === "123"){
        console.log('connected successfully, email is ',req.body.email,' password is ',req.body.password);
        res.send(true);
    } else res.send();
};

