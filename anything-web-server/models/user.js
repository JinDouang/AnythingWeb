const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});


// Export the model
module.exports = mongoose.model('User', UserSchema);