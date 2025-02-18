import React from "react";
import styles from './Upcoming.module.css';
import { Upcomingevents } from "./Upcoming Event";
import Nav2 from "../navbarpages/nav2";
import Footer from "../footer/footer";

const Event =  () => {
    return(
        <>
       {/* <div>hjbds</div> */}
       <Nav2/>
      <Upcomingevents/>
      <Footer/>
        </>
    )
    
}

export default Event;