const express = require('express');
const form = require('../models/RegisterModels');  // Assuming this is your Mongoose model


const Registerform = async (req, res) => {
    const data = req.body;
    // console.log("Data received:", data); 
    form.insertMany(data)
    .then(result =>{
      return res.status(201).json("all records are added");
   })
   .catch (err => {
    // console.error("Error adding record:", err);
    return res.status(500).json(err);
  })
};


exports.Checked = Registerform;

