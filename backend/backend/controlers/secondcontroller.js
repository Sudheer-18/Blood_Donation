const express = require('express');
const { default: mongoose } = require('mongoose');
const db1 = require("../models/agrigationstesting");
const checking1 = async(req,res) =>{
    try {
       const results = await db1.aggregate([
           {
               $group: {
                   _id: {
                       college: "$userCollege",
                       department: "$userDepartment"
                   },
                   departmentCount: { $sum: 1 }
               }
           },
           {
               $group: {
                   _id: "$_id.college",
                   totalStudents: { $sum: "$departmentCount" },
                   departments: {
                       $push: {
                           department: "$_id.department",
                           count: "$departmentCount"
                       }
                   }
               }
           },
           {
               $project: {
                   college: "$_id",
                   totalStudents: 1,
                   departments: {
                       $arrayToObject: {
                           $map: {
                               input: "$departments",
                               as: "dept",
                               in: { k: "$$dept.department", v: "$$dept.count" }
                           }
                       }
                   },
                   _id: 0
               }
           },
           {
               $sort: {
                   college: 1
               }
           }
       ]);

       return res.status(200).json(results);      
   } catch (err) {
       console.error(err); // Log the error for debugging
       return res.status(500).json({ message: "An error occurred", error: err.message });
   }
     
   
  
}
exports.checking1 = checking1;