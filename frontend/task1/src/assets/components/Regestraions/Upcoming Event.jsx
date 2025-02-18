import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import styles from './Upcoming.module.css';
import { MdPerson } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { IoMdBusiness } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify



 export const Upcomingevents = () =>{ 
    const [events, setEvents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/eventdetails')  
          .then((response) => response.json())
          .then((data) => {
            setEvents(data); 
          })
          .catch((error) => {
            console.error('Error fetching events:', error);
          });
      }, []);
   
      const [currentEvent, setCurrentEvent] = useState(null);
    
      const handleRegisterClick = (index) => {
          setCurrentEvent(index); 
        };
        const [Name, setName] = useState('');
        const [email, setemail] = useState('');
        const [College, setCollege] = useState('');
        const [Branch, setBranch] = useState('');
        const [Contact, setContact] = useState('');
        const [Blood, setBlood] = useState('');

        const handled = (eventname) => {
          const p = email; 
          const studentData = {
             Name,
             email:p,
            College ,
            Branch,
            Contact,
            Blood,
            Event: eventname,
          };
       
          axios.post("http://localhost:5001/Register-form", studentData)
          .then(response => {
            console.log("Success:", response.data);
            toast.success("Successfully Registered");

          })
          .catch(error => {
            console.error("Error:", error);
            toast.error("Not Registered")
          });

          axios.post("http://localhost:5001/send-api  ", studentData)
      .then(response => {
        setMessage("Email sent successfully!");
      })
      .catch(error => {
        console.error("Error sending email!", error);
        setMessage("Error sending email.");
      });
      console.log('Email Stored in p:', p);
          console.log('Submitted Data:', studentData);
          setName('');
          setemail('');
          setCollege('');
          setBranch('');
          setContact('');
          setBlood('');
          setCurrentEvent(null); 
        };


     

return (
  <div className={styles.main}>
       <div className={styles.sub1}>
         <p className={styles.sub11}>UPCOMING EVENTS</p>
       </div>
  <div className={styles.eventsList}>
    {events.length > 0 ? (
      events.map((event, index) => (
        <div key={index}>
          <div className={styles.sub2}>
            <div className={styles.sub21}>
              <div className={styles.eventItem}>
                <div className={styles.e1}>
                <div className={styles.c1}>
               <h3 className={styles.s1} style={{top:0}}>{event.event}</h3></div>
               <div className={styles.s21}>
                 <p className={styles.s2}>Event Date:{new Date(event.eventDate).toLocaleDateString()}</p></div>
                 <div className={styles.s31}>
                <p className={styles.s3}>Event Day: {event.dayOfWeek}</p> </div>
                </div>
                <div className={styles.e2}>
                <img src="./blood.png" className={styles.img}/>
                </div>
                </div>
            </div>
            <div className={styles.sub22}>
              <button
                className={styles.b1}onClick={() => handleRegisterClick(index)}>Register</button>
            </div>
          </div>
          {currentEvent=== index && (
            <div className={styles.b11}>
              <div className={styles.b111}>
            <p className={styles.t1}>Registration Form for {event.event}</p></div>
                <div className={styles.b12}>
                  <div className={styles.b121}>
                    <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="text" placeholder="Student Name"value={Name} onChange={(e) => setName(e.target.value)}/>
                       </div>
                       <div className={styles.i12}>< MdPerson /></div>
                       </div>
                       <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="email" placeholder="Student Email"value={email} onChange={(e) => setemail(e.target.value)}/>
                       </div>
                       <div className={styles.i12}><IoMdLock/></div>
                       </div>
                       <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="text" placeholder=" College"value={College} onChange={(e) => setCollege(e.target.value)}/>
                       </div>
                       <div className={styles.i12}><FaUniversity /></div>
                       </div>
                  </div>
                  <div className={styles.b122}>
                  <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="text" placeholder="Branch"value={Branch} onChange={(e) => setBranch(e.target.value)}/>
                       </div>
                       <div className={styles.i12}><IoMdBusiness /></div>
                       </div>
                       <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="number" placeholder="Contact"value={Contact} onChange={(e) => setContact(e.target.value)}/>
                       </div>
                       <div className={styles.i12}><FaPhone /></div>
                       </div>
                       <div className={styles.i1}>
                    <div className={styles.i11}>
                      <input  className={styles.t2} type="text" placeholder="Blood Group"value={Blood} onChange={(e) => setBlood(e.target.value)}/>
                       </div>
                       <div className={styles.i12}><MdBloodtype /></div>
                       </div>
                  </div>
                </div>
                <div className={styles.b13}>
                  <div className={styles.b131} onClick={() => handled(event.event)}>SUBMIT</div>
                </div>
            </div>
          )}
        </div>
      ))
    ) : (
      <p>No upcoming events</p>
    )}
  </div>
  </div>
);
};