const express = require('express');
const user_db = require('../models/user')
const NodeMailer = require('nodemailer')

const sentMail = async(req,res) =>{
    console.log(req.body.mail)
    const transporter = NodeMailer.createTransport({
        service : "gmail",
        auth : {
            user : "cvenu88@gmail.com",
            pass : "vsat dzqm vgxp wqmi"
        }
    })

    const MailOptions ={
        from : "cvenu88@gmail.com",
        to : req.body.mail,
        subject : "Your'e Subscribed: Get the Latest Blood Donation News!",
        text : "Hello Donar,Thank you for subscribing to the Blood Donation Organization newsletter! We are thrilled to have you as part of our community dedicated to saving lives through blood donations."
    }

    transporter.sendMail(MailOptions,(err,info) => {
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).json("mail sent successfully")
    })
}

const getNo = async(req,res) =>{
    // const mail = req.body.mail;
    try{
        const final_roll = await user_db.aggregate([
        {
          $match: {
            "email" : req.body.email
          }
        },
        {
          $project: {
            roll_nu : "$rollNumber",
              _id : 0
          }
        },
      
      ])
    //   console.log(final_roll[0].roll_nu)
      return res.status(200).json(final_roll[0].roll_nu)
    }
    catch(err) {
        // console.log(err)
        return res.status(500).json(err)
    }


    // User.find({}, (err, users) => {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log(users);
    //     }
    //   });



    // try{
    // const final_roll = await user_db.aggregate([
    //     {
    //       $match: {
    //         "email" : "a@gmail.com"
    //       }
    //     },
    //     {
    //       $project: {
    //         roll_nu : "$rollNumber",
    //           _id : 0
    //       }
    //     },
      
    //   ])
    //   console.log(final_roll)
    // }
    // catch(err) {
    //     console.log(err)
    // }
}

const getalno = async(req,res) =>{
  try{
    const final_roll = await user_db.aggregate([
      {
        $match: {
          "email" : req.body.email
        },
      },
      {
          $project: {
              _id : 0,
              __v :0,
              password : 0
          }
        },
    ])
//   console.log(final_roll[0].roll_nu)
  return res.status(200).json(final_roll)
}
catch(err) {
    // console.log(err)
    return res.status(500).json(err)
}

}

const up_ed = async(req,res) => {
  const { email, name, rollNumber, department, college, bloodGroup, contributionNumber } = req.body;

    try {
        const updatedUser = await user_db .findOneAndUpdate(
            { email: email }, // Finding the user by email
            { 
                name: name,
                rollNumber: rollNumber,
                department : department,
                college : college,
                bloodGroup : bloodGroup,
                // Add any other fields you want to update
            },
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'An error occurred while updating the user' });
    }
}

exports.getalno = getalno;
exports.getNo = getNo;
exports.sendMail = sentMail;
exports.up_ed =up_ed;