import React, { useState, useEffect } from "react";
import { FaMale, FaFemale, FaTint, FaUserGraduate, FaUserTie, FaUsers } from 'react-icons/fa';
import './Graph.css';

import {NumberTicker}  from "../NumberTicker"; // Adjust path accordingly
import '../mui.css';
import BarChart0 from "../../../Chart10";
import BarChart9 from "../../../Chart9";
import BloodGroupTable from "../../../blood_group";

export const Statistics1 = () => {
    const [statistics, setStatistics] = useState({
        male: 0,
        female: 0,
        donors: 0,
        students: 0,
        staff: 0,
        others: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const response = await fetch('http://localhost:5001/Check3'); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                let maleCount = 0;
                let femaleCount = 0;
                let donorCount = 0; // Assuming you handle donors in your backend
                let studentCount = 0;
                let staffCount = 0;
                let othersCount = 0;

                data.forEach((genderGroup) => {
                    if (genderGroup.gender === 'Male') {
                        maleCount = genderGroup.total;
                        genderGroup.professions.forEach((profession) => {
                            if (profession.prof === 'student') studentCount += profession.count;
                            if (profession.prof === 'staff') staffCount += profession.count;
                            if (profession.prof === 'others') othersCount += profession.count;
                        });
                    } else if (genderGroup.gender === 'Female') {
                        femaleCount = genderGroup.total;
                        genderGroup.professions.forEach((profession) => {
                            if (profession.prof === 'student') studentCount += profession.count;
                            if (profession.prof === 'staff') staffCount += profession.count;
                            if (profession.prof === 'others') othersCount += profession.count;
                        });
                    }
                });

                const totalDonors = studentCount + staffCount + othersCount;

                setStatistics({
                    male: maleCount,
                    female: femaleCount,
                    donors: totalDonors, // Adjust if needed
                    students: othersCount,
                    staff: staffCount,
                    others: studentCount,
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStatistics();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <>
            <div className="main">
                <div className="header">
                    Blood Donation Statistics - 2024
                </div>

                <div className="CountDetails">
                    <div className="box1">
                        <img src="./blooddonation_logo.gif" alt="Blood Donation Logo" />
                    </div>

                    <div className="box2">
                        <div className="donor-stat male">
                            <FaMale className="icon" />
                            <p>Male</p>
                            <p><NumberTicker 
                                value={statistics.male} 
                                direction="up" 
                                delay={0.5} 
                                decimalPlaces={0} 
                                className="my-ticker" 
                            /></p>
                        </div>
                        <div className="donor-stat female">
                            <FaFemale className="icon" />
                            <p>Female</p>
                            <p><NumberTicker 
                                value={statistics.female} 
                                direction="up" 
                                delay={0.5} 
                                decimalPlaces={0} 
                                className="my-ticker" 
                            /></p>
                        </div>
                    </div>

                    <div className="donors-box">
                        <FaTint className="icon" />
                        <p>Donors (2024)</p>
                        <p><NumberTicker 
                            value={statistics.donors} 
                            direction="up" 
                            delay={0.5} 
                            decimalPlaces={0} 
                            className="my-ticker" 
                        /></p>
                    </div>

                    <div className="statistics-container">
                        <div className="statistics-box student-box">
                            <FaUserGraduate className="icon" />
                            <p>Students</p>
                            <p><NumberTicker 
                                value={statistics.students} 
                                direction="up" 
                                delay={0.5} 
                                decimalPlaces={0} 
                                className="my-ticker" 
                            /></p>
                        </div>
                        <div className="statistics-box staff-box">
                            <FaUserTie className="icon" />
                            <p>Staff</p>
                            <p><NumberTicker 
                                value={statistics.staff} 
                                direction="up" 
                                delay={0.5} 
                                decimalPlaces={0} 
                                className="my-ticker" 
                            /></p>
                        </div>
                        <div className="statistics-box others-box">
                            <FaUsers className="icon" />
                            <p>Others</p>
                            <p><NumberTicker 
                                value={statistics.others} 
                                direction="up" 
                                delay={0.5} 
                                decimalPlaces={0} 
                                className="my-ticker" 
                            /></p>
                        </div>
                    </div>
                </div>


                <div className="graphs_div">
                    <div className="kjhg_">
                    <div className="Bloodgroups">
                    <div className="_a1">
                 <span>BLood Groups</span>
                 </div>
                 <div className="bg_div">
                 <BloodGroupTable/>
                 </div>
                 </div>
                    </div>
                    <div className="collegegraph">
                        <div className="_1" >
                        <span>COLLEGE'S</span>
                        </div>
                        <div className="_2">
                    <BarChart9/>
                    </div>
                    </div>
                </div>

            {/* <div className="graphs_div">
                <div className="Bloodgroups">
                    <div className="_a1">
                 
                    <span>BLood Groups</span>
                    </div>
                    <div className="bg_div">
                    <BloodGroupTable/>
                    </div>
                </div>
                <div className="collegegraph">
                    <div className="_1">
                      <span>COLLEGE'S</span>
                        </div>
                    <div className="_2">
                    <BarChart9/>
                    </div>
                </div>
            </div> */}



            {/* <div className="empty_"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa, ipsum omnis amet sit et. Sed voluptatem, suscipit, iste omnis nemo alias itaque at reprehenderit voluptatum incidunt officiis minus architecto.
            A aspernatur dolorum dolor ipsa inventore fugiat asperiores laudantium perferendis ea, voluptas cum quos recusandae modi facilis, similique velit eligendi maiores voluptatibus debitis explicabo odit animi mollitia. Delectus, illo expedita?</p></div> */}

                {/* <div className="graphs">
                    <div className="graph1">
                        <div className="graphHead1">
                            <div>
                            <img src="./bgheading.jpg" alt="" />
                            <span>COLLEGE'S</span>
                            </div>
                        </div>
                     <div className="div1">
                     </div>
                      
                    </div>

                    <div className="graph2">
                        <div className="graphHead1">
                            <img src="./bgheading.jpg" alt="" />
                            <span>LOCATION'S</span>
                        </div>
                    <div className="div2">
                    <BarChart0/>

                    </div>

                    </div>
                </div> */}
            </div>
        </>
    );
};