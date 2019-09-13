const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  list: { type: Array, default : [] },
}, { collection : 'user' });
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;