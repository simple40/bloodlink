const mongoose = require("mongoose");

const donateSchema = mongoose.Schema({
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
     
});

module.exports = mongoose.model("Donation",donateSchema); 