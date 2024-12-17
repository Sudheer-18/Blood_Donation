const express = require('express')
const mongoose = require('mongoose')
const BranchSchema = mongoose.Schema({
    branch_name : {
        type : String
    },
    Donars :{
        type : Number
    }
})

module.exports = mongoose.model('Branch_data',BranchSchema);