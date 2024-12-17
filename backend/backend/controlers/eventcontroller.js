const mongoose = require('mongoose');
const mydb = require('../models/firstmodal');

const getEventDetails = async (req, res) => {
    try {
      const events = await mydb.find(); 
      // console.log(events)
      return res.status(200).json(events);
    } catch (err) {
      return res.status(500).json(err);
    }
};
exports.getEventDetails = getEventDetails;
