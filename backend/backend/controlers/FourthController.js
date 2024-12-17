const express = require("express")
const mongoose = require('mongoose');
const Db_1 = require("../models/agrigationstesting");
const db1 = require("../models/agrigationstesting");
const db2 = require("../models/secondmodel")




const get_Data = async(req,res) => {
    console.log("working")
    try {
        const users = await Db_1.find({});
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
    return res.status(200).json("working");

}



const checking2 = async(req,res) => {
    try{
        const result = await db1.aggregate([
            {
              $group: {
                _id: "$Blood_group",
                count: { $sum: 1 } 
              }
            },
            {
              $project: {
                _id: 0,
                bloodGroup: "$_id",
                count: 1 
              }
            }
          ]);
          return res.status(200).json(result); 
    }
    catch(err){
        console.error(err); // Log the error for debugging
        return res.status(500).json({ message: "An error occurred", error: err.message });
    }
}


const checking3 = async(req,res) =>{
  try{
    const result = await db1.aggregate(
      [
      {
        $group: {
          _id: {
            gender: "$userGender",
            prof: { $cond: [{ $eq: ["$prof", ""] }, "others", "$prof"] }
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: "$_id.gender",
          professions: {
            $push: {
              prof: "$_id.prof",
              count: "$count"
            }
          },
          total: { $sum: "$count" }
        }
      },
      {
        $project: {
          gender: "$_id",
          professions: 1,
          total: 1,
          _id: 0
        }
      }
    ]
    );
      return res.status(200).json(result); 
}
catch(err){
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "An error occurred", error: err.message });
}
}



const checking4 = async(req,res) =>{
  try{
   const result = await db2.aggregate([
    {
      $group: {
        _id: "$college",
        bloodDonated : {$sum : "$bloodDonated"}
      }
    },
    {
      $project: {
        college: "$_id",
        bloodDonated : 1,
        _id: 0
      }
    }
   ])
   return res.status(200).json(result); 
  }
  catch(err){
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "An error occurred", error: err.message });
  }
}

exports.get_Data = get_Data;
exports.checking2 = checking2;
exports.checking3=checking3;
exports.checking4=checking4;
