const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const signInRouter = require('./routes/signInRouter.js'); 
const signUpRouter = require('./routes/signUpRouter.js');
const useRouter = require('./routes/useRouter.js');
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.use("/api/login", signInRouter);
app.use("/api/signup",signUpRouter);
//app.use("/api", useRouter);

mongoose.connect(
	'mongodb://localhost/todoBase',
	{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true,
	},
	(err) => {
  	if(err) return console.log(err);
 		app.listen(3000);
	}
);

