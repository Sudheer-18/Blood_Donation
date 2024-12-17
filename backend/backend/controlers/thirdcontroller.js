const express = require('express');
const mongoose = require('mongoose');
const db1 = require("../models/agrigationstesting");
const checking1 = async (req, res) => {
    const { college, branch } = req.params;
    console.log('Branch:', branch);
    console.log('College:', college);
    try {
        const results = await db1.aggregate([
            {
                $match: {
                    userCollege: college,
                    userDepartment: branch
                }
            },
            {
                $group: {
                    _id: null, 
                    users: {
                        $push: {
                            rollNumber: "$userRollNumber",
                            name: "$userName",
                            bloodGroup: "$Blood_group" 
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0, 
                    users: 1 
                }
            }
        ]);
        if (!results.length) {
            return res.status(404).json({ message: 'No records found' });
        }
        // console.log('Sending users array:', results[0].users); 
        return res.status(200).json(results[0].users);
    } catch (err) {
        console.error('Error occurred:', err.message);
        return res.status(500).json({ message: "An error occurred", error: err.message });
    }
};
exports.checking1 = checking1;
