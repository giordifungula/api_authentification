const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const uniqueValdiator = require('mongoose-unique-validator');

// User Schema data model

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        // unique email
        index: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type:String,
        requred: true
    },
    contact: {
        type:String,
        requred: true
        // 
    }
})

UserSchema.plugin(uniqueValdiator);
// will spit out an error if the user is not valid
const User = module.exports  = mongoose.model('User', UserSchema)