const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("users", userSchema);

//Trying Git Demo and creating new branch