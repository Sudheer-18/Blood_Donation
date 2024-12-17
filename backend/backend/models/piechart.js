const mongoose = require('mongoose');

// Define the schema
const Aggrigation_testing = new mongoose.Schema({
    // userTeamCode: { type: String, required: true },
    userRollNumber: { type: String, required: true },
    userName: { type: String, required: true },
    userCollege: { type: String, required: true },
    userEmail: { type: String, required: true },
    userGender: { type: String, required: true },
    userDepartment: { type: String, required: true },
    // userLocation: { type: String, required: true },
    userYear: { type: Number, required: true },
    // userEventCategory: { type: String, required: true },
    // userEvent: { type: String, required: true },
    // userTeamsize: { type: Number, required: true },
    // userAccomodation: { type: String, required: true },
    // otherCollege: { type: String, default: '' },
})

module.exports = mongoose.model("Aggrigation_testing",Aggrigation_testing)