const express = require('express')
const { default: mongoose } = require('mongoose')
const college_data = mongoose.Schema({
    college_name : {
        type : String
    },
    donars : {
        type : Number
    }
})
module.exports = mongoose.model('college_data',college_data);