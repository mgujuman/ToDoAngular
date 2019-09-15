const User = require("../models/user.js");

exports.signUp = (req, res) =>{
  console.log('REGISTRATION successfully, email is ',req.body.email,' password is ',req.body.password);
 
  const { email, password } = req.body;
  User.find({ email },(err,user) => {
    if (err) return  console.log(err);
    console.log(user.length);
    if (user.length === 0) {
      const user = new User({ email, password });
      user.save ((err) => { if (err) return  console.log(err)});
      console.log("add new user");
      return res.status(200).json({
        status: "succes",
      });
    } else {
      return res.status(200).json({
        status: 'fail',
      });
    }
  });
};