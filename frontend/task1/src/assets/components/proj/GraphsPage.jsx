import React from "react";
import { FaMale, FaFemale ,FaTint,FaUserGraduate, FaUserTie, FaUsers} from 'react-icons/fa';
import './GraphCss.css'

export const Statistics = () => {
    return(
        <>
        <div className="main">

            <div className="header">
            Blood Donation Statistics - 2024
            </div>


            <div className="CountDetails">

                <div className="box1">
                    <img src="./blooddonation_logo.gif"/>
                </div>

                <div className="box2">
                    <div className="donor-stat male">
                        <FaMale className="icon" />
                        <p>Male</p>
                        <p>1111</p>
                     </div>
                    <div className="donor-stat female">
                        <FaFemale className="icon" />
                        <p>Female</p>
                        <p>96</p>
                    </div>
                </div>


        <div className="donors-box">
            <FaTint className="icon" />
            <p>Donors (2024)</p>
            <p>1207</p>
        </div>

        <div className="statistics-container">
            <div className="statistics-box student-box">
                <FaUserGraduate className="icon" />
                <p>Students</p>
                <p>1103</p>
            </div>
            <div className="statistics-box staff-box">
                <FaUserTie className="icon" />
                <p>Staff</p>
                <p>100</p>
            </div>
            <div className="statistics-box others-box">
                <FaUsers className="icon" />
                <p>Others</p>
                <p>4</p>
            </div>
        </div>

        </div>


            <div className="graphs">
                <div className="graph1">
                     <div className="graphHead1">
                        <img src="./bgheading.jpg"/>
                        <span>COLLEGE'S</span>
                     </div>
                     <div className="div1"></div>
                </div>

                <div className="graph2">
                    <div className="graphHead1">
                        <img src="./bgheading.jpg"/>
                        <span>LOCATION'S</span>
                    </div>
                    <div className="div1"></div>
                </div>
            </div>
        </div>
        </>
    )
}