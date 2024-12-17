const express = require('express');
const mongoose = require('mongoose');
const DonarContributions = new mongoose.Schema({
    rollNumber : {
        type : String
    },
    contributions :{
        type : Number
    },
    bloodDonated : {
        type : Number
    },
    college :{
        type : String
    }
});

module.exports = mongoose.model("DonarContributions",DonarContributions);