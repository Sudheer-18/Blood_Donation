const express = require('express')
const route = express.Router();
const c1 = require('../controlers/auth')
const controller = require('../controlers/navbar_controller')
const mail = require('../controlers/Mailsent')
const EntireController = require('../controlers/eventcontroller');
const form = require('../controlers/Registercontroller');
const FntireController = require('../controlers/firstController');
const secondcontroller = require("../controlers/secondcontroller")
const thridcontroller = require("../controlers/thirdcontroller")
const fourthcontroler = require("../controlers/FourthController")
const fivethcontroller = require("../controlers/Fivethcontroller")
route.post("/send-mail-footer",controller.sendMail);
route.post('/req-roll',controller.getNo);
route.post('/signup',c1.sig_up);
route.post('/login' , c1.log_in);
route.post('/req-da',controller.getalno);
route.post('/update-dashboard',controller.up_ed);
route.post("/send-api", mail.sendmail);
route.get('/EventDetails', EntireController.getEventDetails);
route.post("/Register-form",form.Checked);
route.post('/EventDetails', FntireController.EventDetails);
route.post('/DonarContributions', FntireController.DonarContributions);
route.post('/DeleteEventDetails',FntireController.DeleteEventDetails)
route.get('/EventDetails', FntireController.getEventDetails);
route.post('/Aggrigationtest',FntireController.Aggrigation_testing);
route.get('/checking1',secondcontroller.checking1); 
route.get('/aggrigation_testing/:college/:branch', thridcontroller.checking1);
route.get("/get-data",fourthcontroler.get_Data);
route.get("/Check1",fivethcontroller.checking1);
route.get("/Check2",fourthcontroler.checking2);
route.get("/Check3",fourthcontroler.checking3);
route.get("/Check4",fourthcontroler.checking4);

module.exports = route;