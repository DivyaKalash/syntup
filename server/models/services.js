const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },

    
    slug:{
        type: String,
        required: true,
        unique: true
    },
    availability:{
        type: String
    },

    serviceCost:{
        type: Number,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    servicePictures: [
        {
            img: {
                type: String
            }
        }
    ],
    rating: {
        type: String,
    },
    reviews: [
        {
            userId: {type: mongoose.Schema.ObjectId, ref: "User"},
            type: String
        }
    ],

    category: {type: mongoose.Schema.ObjectId, ref: "Category", required: true},
    createdBy: {type: mongoose.Schema.ObjectId, ref: "User", required: true},
    updatedAt: Date,

}, {timestamps: true});

module.exports = mongoose.model("Service", serviceSchema);

