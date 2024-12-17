const express = require('express');
const moongose = require('mongoose');

const Registerdata = {
   Name:{
        type: String
     },
     email:{
        type:String
     },
     College:{
        type : String
     },
     Branch:{
        type: String
     },
     Contact:{
        type:Number
     },
     Blood:{
        type:String
     },
     Event : {
      type:String,
     }
}

module.exports = moongose.model("Registereddata",Registerdata);