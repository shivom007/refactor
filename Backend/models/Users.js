// const mongoose = require("mongoose");

// const UsersSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const UsersModel = mongoose.model("User", UsersSchema); // Corrected the model creation

// module.exports = UsersModel; // Export the model

// const mongoose = require("mongoose");

// const UsersSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const UsersModel = mongoose.model("User", UsersSchema);

// module.exports = UsersModel;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
