    const express = require('express');
    const mydb = require("../models/firstmodal");
    const mydb1 = require("../models/secondmodel")
    const mydb2 = require("../models/graphdata")
    const mydb3 = require("../models/branchschema")
    const mydb4 = require("../models/agrigationstesting");
    const { default: mongoose } = require('mongoose');
    const EventDetails = async(req, res) => {
        const { event, eventDate, dayOfWeek } = req.body;
        mydb.insertMany({ event, eventDate, dayOfWeek })
            .then(result => {
                return res.status(200).json("Record added");
            })
            .catch(err => {
                return res.status(500).json(err);
            });
    };
    const DonarContributions = async (req, res) => {
        const ob = req.body;
        // console.log(ob);
        try {
            const { rollNumber, contributions, bloodDonated,college } = ob;
            const existingRecord = await mydb1.findOne({ rollNumber: rollNumber });
            if (existingRecord) {
                existingRecord.contributions += contributions;
                existingRecord.bloodDonated += bloodDonated;
                await existingRecord.save();
                return res.status(200).json("Record updated");
            } else {
                const newRecord = new mydb1({
                    rollNumber: rollNumber,
                    contributions: contributions,
                    bloodDonated: bloodDonated,
                    college : college
                });
                await newRecord.save();
                return res.status(200).json("Record added");
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    };
    const DeleteEventDetails = async (req, res) => {
        const { _id } = req.body;
        try {
            const deletedEvent = await mydb.findByIdAndDelete(_id);
            if (!deletedEvent) {
                return res.status(404).json("Event not found");
            }
            return res.status(200).json("Event deleted");
        } catch (err) {
            return res.status(500).json(err);
        }
    };
    const getEventDetails = async (req, res) => {
        try {
          const events = await mydb.find(); 
        //   console.log(events)
          return res.status(200).json(events);
        } catch (err) {
          return res.status(500).json(err);
        }
      };
      const Aggrigation_testing = async(req,res) =>{
        const data = req.body;
        mydb4.insertMany(data)
        .then(result => {   
            return res.status(200).json("Record added");
        })  
        .catch(err =>{
            return res.status(500).json(err);
        })
      }

    
    exports.Aggrigation_testing = Aggrigation_testing;
    exports.EventDetails = EventDetails;
    exports.DonarContributions = DonarContributions;
    exports.DeleteEventDetails = DeleteEventDetails;
    exports.getEventDetails = getEventDetails;