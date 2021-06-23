const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    contactNumber: {type: String},
    profilePicture: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("User",userSchema);