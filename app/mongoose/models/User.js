var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {type: String, required: true, index:{unique: true}, lowercae: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);
