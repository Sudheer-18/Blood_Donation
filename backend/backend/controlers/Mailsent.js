const express = require('express')
const nodemailer = require('nodemailer')

const Mailsender = (req,res) => {
  const { email } = req.body;  
  console.log("Email to be sent:", email);  
const Transporter  = nodemailer.createTransport({
        service :'gmail',
        auth : {
            user :"marriparimala44@gmail.com",
            pass:"cain xfek lcrr qmdf"

        }
    })
const Mailloptions = {
    from:"marriparimala44@gmail.com",
    to : email,
    subject:"Blood Camp",
    text:" You are Succesfuully Registered for the Event Which is conducted by Blood Camp ",
}

Transporter.sendMail(Mailloptions,(err,info) => {
  if (err)
    {
    return res.status(500).json(err)
  }
  return res.status(200).json("Successfully send")
})
}


exports.sendmail = Mailsender;
