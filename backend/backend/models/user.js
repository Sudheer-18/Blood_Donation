const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department : {type:String},
  college : {type:String},
  bloodGroup : {type:String},

});


module.exports = mongoose.model('user', userSchema);
