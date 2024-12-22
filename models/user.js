const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  userPassword: String,
  userEmail: String,
  mobileNumber: Number,
  userAddress: String,
  personOneName: String,
  personOneEmail: String,
  personOneMobileNumber: Number,
  personTwoName: String,
  personTwoEmail: String,
  personTwoMobileNumber: Number
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
