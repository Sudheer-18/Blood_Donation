import React, { useState, useEffect } from "react";
import './style.css';
import { FaUser, FaUniversity, FaTint, FaHandHoldingMedical, FaBuilding } from 'react-icons/fa';
import { IoMdLock } from "react-icons/io";
import { HiOutlineIdentification } from 'react-icons/hi';
import axios, { Axios } from "axios";
import { toast, ToastContainer } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for Toastify
import Nav2 from "../navbarpages/nav2";
import { Result } from "postcss";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [department, setDepartment] = useState('enter department');
    const [college, setCollege] = useState('N/A');
    const [bloodGroup, setBloodGroup] = useState('N/A');
    const [contributionNumber, setContributionNumber] = useState(0);
    const [email, setEmail] = useState('');
    const [isEditable, setIsEditable] = useState(false);
    const [dataUpdated, setDataUpdated] = useState(false);
    const [pagevisible,setpagevisible] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('data');
        if (loggedInUser) {
            axios.post("http://localhost:5001/req-da", { "email": loggedInUser })
                .then(response => {
                    const data = response.data;
                    setpagevisible(true)
                    if (data && data.length > 0) {
                        setName(data[0].name || '');
                        setRollNumber(data[0].rollNumber || '');
                        setDepartment(data[0].department || '');
                        setCollege(data[0].college || '');
                        setBloodGroup(data[0].bloodGroup || '');
                        setEmail(data[0].email || '');
                        setContributionNumber(data[0].Contributions || 0);

                        const p_p = document.getElementsByClassName("profilepic")[0];
                        const d = data[0].rollNumber;
                        p_p.style.backgroundImage = `url('https://info.aec.edu.in/ACET/StudentPhotos/${d}.jpg')`;
                    }
                })
                .catch(err => {
                    console.error("Error fetching student data:", err);
                    toast.error("Error fetching student data!");  // Show error toast
                });
            // const loggedInUser = localStorage.getItem('data');
            // axios.post("http://localhost:5001/req-roll",{ "email": loggedInUser })
            // .then(Result => {
                
            // })
        }
    }, [dataUpdated]);

    const handleNumberChange = (e) => {
        setContributionNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSaveChanges = () => {
        const updatedData = {
            name,
            rollNumber,
            department,
            college,
            bloodGroup,
            contributionNumber,
            email
        };

        axios.post("http://localhost:5001/update-dashboard", updatedData)
            .then(response => {
                console.log("Data successfully saved:", response.data);
                setIsEditable(false);
                setDataUpdated(prev => !prev);  // Trigger data re-fetch

                // Show success toast notification
                toast.success("Data saved successfully!");
            })
            .catch(err => {
                console.error("Error saving data:", err);
                // Show error toast notification
                toast.error("Error saving data!");
            });
    };

    return (
        <>

        {
            pagevisible ? (
                
                <>
                <ToastContainer /> 
                <div className="main">
                    <div className="div1">
                        <div className="heading">STUDENT DASHBOARD</div>
                    </div>
    
                    <div className="div2">
                        <div className="picture">
                            <div className="profilepic"></div>
                        </div>
    
                        <div className="details">
                            <div className="fields">
                                <div className="inputField">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={!isEditable} 
                                    />
                                    <FaUser color="red" />
                                </div>
    
                                <div className="inputField">
                                    <input
                                        type="text"
                                        placeholder="Roll Number"
                                        value={rollNumber}
                                        onChange={(e) => setRollNumber(e.target.value)}
                                        disabled={!isEditable} 
                                    />
                                    <HiOutlineIdentification color="red" />
                                </div>
    
                                <div className="inputField">
                                    <input
                                        type="text"
                                        placeholder="Department"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        disabled={!isEditable} 
                                    />
                                    <FaBuilding color="red" />
                                </div>
    
                                <div className="inputField">
                                    <input
                                        type="text"
                                        placeholder="College"
                                        value={college}
                                        onChange={(e) => setCollege(e.target.value)}
                                        disabled={!isEditable} 
                                    />
                                    <FaUniversity color="red" />
                                </div>
    
                                <div className="inputField">
                                    <input
                                        type="text"
                                        placeholder="Blood Group"
                                        value={bloodGroup}
                                        onChange={(e) => setBloodGroup(e.target.value)}
                                        disabled={!isEditable} 
                                    />
                                    <FaTint color="red" />
                                </div>
    
                                <div className="inputField">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={false} 
                                    />
                                    <IoMdLock color="red" />
                                </div>
                            </div>
    
                            <div className="seconddiv">
                                <div className="contributiondiv">
                                    <div className="Contribution">
                                        <div className="c1">
                                            <div className="contribution-text">Contributions</div>
                                            <div className="contribution-number">
                                                {false ? (
                                                    <input
                                                        type="number"
                                                        value={contributionNumber}
                                                        onChange={handleNumberChange}
                                                        style={{ width: '50px', textAlign: 'center' }}
                                                    />
                                                ) : (
                                                    <span>{contributionNumber}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="c2">
                                            <FaHandHoldingMedical size={50} color="red" />
                                        </div>
                                    </div>
                                </div>
    
                                <div className="editdiv">
                                    <button className="btn1" onClick={() => setIsEditable(true)}>EDIT</button>
                                    {isEditable && (
                                        <button className="btn" onClick={handleSaveChanges}>
                                            Save Changes
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ):(
                <></>
            )
        }
           
        </>
    );
};

export default Dashboard;
