const mongoose = require('mongoose');
const EventDetails = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    eventDate: {
        type: String, 
        required: true
    },
    dayOfWeek: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("EventDetails", EventDetails);
