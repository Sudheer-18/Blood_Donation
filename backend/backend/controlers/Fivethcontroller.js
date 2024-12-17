const express = require("express")
const db1 = require("../models/agrigationstesting")

const checking1 = async(req,res) =>{
    // console.log(req.body);
    // return res.status(200).json(req.body);
    // var data = req.body;
    // db1.insertMany(data)
    // .then(result => {
    //     return res.status(201).json("records added")
    // })
    // .catch(err => {
    //     return res.status(500).json(err);
    // })
    // db1.find()
    // .then(result =>{
    //     return res.status(200).json(result)
    // })
    // .catch(err =>{
    //     return res.status(500).json(err);
    // })
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


exports.checking1 = checking1;