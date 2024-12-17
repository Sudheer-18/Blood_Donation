const mongoose = require('mongoose');
const Aggrigation_testing = new mongoose.Schema({
    userRollNumber: { 
        type: String, 
        required: true 
    },
    userName: { 
        type: String, 
        required: true
     },
    userCollege: { 
        type: String, 
        required: true 
    },
    userEmail: { 
        type: String, 
        required: true 
    },
    userGender: { 
        type: String, 
        required: true 
    },
    userDepartment: { 
        type: String, 
        required: true 
    },
    userYear: { 
        type: Number, 
        required: true 
    },
    Blood_group : {
        type : String,
        require : true
    },
    prof :{
        type : String,
        require : true
    }

})
module.exports = mongoose.model("Aggrigation_testing",Aggrigation_testing)