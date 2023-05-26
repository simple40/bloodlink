const mongoose = require("mongoose");

const requestSchema = mongoose.Schema({
     userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
     },
     bloodType: {
        type: String,
        required: [true, "Please add the blood type"],
     },
     location: {
        type: String,
        required: [true, "Please add the location"],
     },
     status: {
        type: String,
        required: [true, "Please add the status"],
     },
     donorUserID: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "User",
        default: null,
     },

});

module.exports = mongoose.model("Request",requestSchema); 