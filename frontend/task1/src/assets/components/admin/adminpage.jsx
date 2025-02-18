import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Piechart1 from './picechart'; 
import './AdminPage.css';
const AdminPage = () => {
  const [event, setEvent] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventList, setEventList] = useState([]); 
  const [activeForm, setActiveForm] = useState('pieChart');
  const [rollNumber, setRollNumber] = useState('');
  const [contributions, setContributions] = useState('');
  const [bloodDonated, setBloodDonated] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [branchOptions, setBranchOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [college, setCollege] = useState('');
  const [userName, setuserName] = useState('');
  const [userRollNumber, setuserRollNumber] = useState('');
  const [userCollege, setuserCollege] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userGender, setuserGender] = useState('');
  const [userYear, setuserYear] = useState('');
  const [Blood_group, setBlood_group] = useState('');
  const [userDepartment, setuserDepartment] = useState('');
  const [prof, setprof] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[new Date(dateString).getDay()];
  };
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5001/EventDetails');
      if (response.status === 200) {
        setEventList(response.data);
      } else {
        throw new Error('Failed to fetch events.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fetchCollegeData = async (college, branch) => {
    if (!college || !branch) {
      toast.error('Please select both college and branch.');
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5001/aggrigation_testing/${college}/${branch}`);
      if (response.status === 200) {
        const users = response.data || [];
        setUserData(users);
        // console.log('Fetched user data:', users);
      } else {
        throw new Error('Failed to fetch college data.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  const handleCollegeChange = (college) => {
    setSelectedCollege(college);
    setActiveForm('collegeBranches');
    setSelectedBranch(''); 
    const branches = {
      AdityaUniversity: ['CSE', 'EEE', 'ECE', 'Mech', 'Civil', 'IT', 'DS', 'AIML', 'MCA', 'AGRI'],
      ACET: ['CSE', 'EEE', 'ECE', 'Mech', 'Civil', 'IT', 'DS', 'AIML'],
      ACOE: ['CSE', 'EEE', 'ECE', 'Mech', 'Civil', 'IT', 'DS', 'AIML'],
    };
    setBranchOptions(branches[college] || []);
  };
  const handleBranchChange = (branch) => {
    setSelectedBranch(branch);
    fetchCollegeData(selectedCollege, branch);
  };
  const handleAddEvent = async () => {
    if (event && eventDate) {
      const newEvent = { event, eventDate, dayOfWeek: getDayOfWeek(eventDate) };
      try {
        const response = await axios.post('http://localhost:5001/EventDetails', newEvent);
        if (response.status === 200) {
          setEventList((prev) => [...prev, { ...newEvent, _id: response.data._id }]);
          setEvent('');
          setEventDate('');
          toast.success('Event added successfully!');
        } else {
          throw new Error('Failed to add event.');
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error('Please enter both event name and date.');
    }
  };
  const handleDeleteEvent = async (index) => {
    const eventToDelete = eventList[index];
    if (!eventToDelete || !eventToDelete._id) {
      toast.error('Event ID not found.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5001/DeleteEventDetails', { _id: eventToDelete._id });
      if (response.status === 200) {
        setEventList((prev) => prev.filter((_, i) => i !== index));
        toast.info('Event deleted successfully.');
      } else {
        throw new Error('Failed to delete event.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleSubmitAdditionalForm = async () => {
    if (rollNumber && college && contributions && bloodDonated) {
      const additionalFormData = {
        rollNumber,
        contributions: parseInt(contributions, 10),
        bloodDonated: parseInt(bloodDonated, 10),
        college,
      };
      try {
        const response = await axios.post('http://localhost:5001/DonarContributions', additionalFormData);
        if (response.status === 200) {
          toast.success('Additional details submitted successfully!');
          setRollNumber('');
          setContributions('');
          setBloodDonated('');
          setCollege('');
        } else {
          throw new Error('Failed to submit additional details.');
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error('Please fill all fields in the additional form.');
    }
  };
  const handle_new_donar_submit = async () => {
    const data = {
      userName,
      userRollNumber,
      userCollege,
      userEmail,
      userGender,
      userDepartment,
      userYear,
      Blood_group,
      prof,
    };
    try {
      const response = await axios.post('http://localhost:5001/Aggrigationtest', data);
      if (response.status === 200) {
        toast.success("Data submitted successfully");
        setuserCollege('');
        setuserRollNumber('');
        setuserName('');
        setuserDepartment('');
        setuserYear('');
        setuserEmail('');
        setprof('');
        setBlood_group('');
        setuserGender('');
      } else {
        throw new Error('Failed to submit additional details.');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleBloodGroupChange = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);
    console.log(bloodGroup);
  };

  
  const downloadCSV = () => {
    const csvRows = [];
    const headers = ['S.No', 'Roll Number', 'Name', 'Blood Group'];
    csvRows.push(headers.join(','));

    userData.forEach((user, index) => {
      const row = [index + 1, user.rollNumber, user.name, user.bloodGroup];
      csvRows.push(row.join(','));
    });
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'student_data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>
      <div className="main-content">
        <div className="sidebar">
          <button onClick={() => setActiveForm('pieChart')} className="sidebar-btn">Show Pie Chart</button>
          <button onClick={() => setActiveForm('manageEvents')} className="sidebar-btn">Manage Events</button>
          {activeForm === 'manageEvents' && (
            <>
              <button onClick={() => setActiveForm('addEvent')} className="sidebar-btn">Add Event</button>
              <button onClick={() => setActiveForm('viewEvent')} className="sidebar-btn">View Events</button>
              <button onClick={() => setActiveForm('deleteEvent')} className="sidebar-btn">Delete Event</button>
            </>
          )}
          <button onClick={() => setActiveForm('newdonar')} class = "sidebar-btn">new donars</button>
          <button onClick={() => setActiveForm('additional')} className="sidebar-btn">Contributions</button>
          <select name="college" id="collegeSelect" onChange={(e) => handleCollegeChange(e.target.value)}>
            <option value="">Select College</option>
            <option value="AdityaUniversity">AdityaUniversity</option>
            <option value="ACET">ACET</option>
            <option value="ACOE">ACOE</option>
          </select>
        </div>
        <div className="form-container">
          {activeForm === 'pieChart' && <Piechart1 />}  
          {activeForm === 'manageEvents' && <Piechart1/>}
          {activeForm === 'addEvent' && (
            <>
              <h2>Add Event</h2>
              <input 
                type="text" 
                placeholder="Enter event name" 
                value={event} 
                onChange={(e) => setEvent(e.target.value)} 
                className="input-field" 
              />
              <input 
                type="date" 
                value={eventDate} 
                onChange={(e) => setEventDate(e.target.value)} 
                className="input-field" 
              />
              <button onClick={handleAddEvent} className="btn">Submit</button>
            </>
          )}
          {activeForm === 'viewEvent' && (
            <>
              <h2>Event List</h2>
              {eventList.length > 0 ? (
                eventList.map((item, index) => (
                  <div className="event-item" key={item._id}>
                    <div>
                      <strong>Event:</strong> {item.event} <br />
                      <strong>Date:</strong> {item.eventDate} <br />
                      <strong>Day:</strong> {item.dayOfWeek}
                    </div>
                  </div>
                ))
              ) : (
                <p>No events available.</p>
              )}
            </>
          )}
          {activeForm === 'deleteEvent' && (
            <>
              <h2>Delete Event</h2>
              {eventList.length > 0 ? (
                eventList.map((item, index) => (
                  <div className="event-item" key={item._id}>
                    <div>
                      <strong>Event:</strong> {item.event} <br />
                      <strong>Date:</strong> {item.eventDate} <br />
                      <strong>Day:</strong> {item.dayOfWeek}
                    </div>
                    <button onClick={() => handleDeleteEvent(index)} className="btn delete-btn">
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No events to delete.</p>
              )}
            </>
          )}
        {activeForm === 'collegeBranches' && (
  <>
    <h2>College Branches</h2>
    {branchOptions.length > 0 && (
      <select name="branch" id="branchSelect" onChange={(e) => handleBranchChange(e.target.value)}>
        <option value="">Select Branch</option> 
        {branchOptions.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
    )}
    {userData.length > 0 && (
      <>
        <select name="bloodGroup" onChange={(e) => handleBloodGroupChange(e.target.value)}>
          <option value="">All Blood Groups</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+ </option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {userData
              .filter((user) => selectedBloodGroup === '' || user.bloodGroup === selectedBloodGroup)
              .map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.rollNumber}</td>
                  <td>{user.name}</td>
                  <td>{user.bloodGroup}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <button onClick={downloadCSV} className="btn">Download</button>
      </>
    )}
  </>
)}
          {activeForm === 'additional' && (
            <>
              <h2>Additional Contribution Form</h2>
              <input 
                type="text" 
                placeholder="Enter Roll Number" 
                value={rollNumber} 
                onChange={(e) => setRollNumber(e.target.value)} 
                className="input-field" 
              />
              <input 
                type="text" 
                placeholder="Enter Contributions" 
                value={contributions} 
                onChange={(e) => setContributions(e.target.value)} 
                className="input-field" 
              />
              <input 
                type="text" 
                placeholder="Enter Blood Donated" 
                value={bloodDonated} 
                onChange={(e) => setBloodDonated(e.target.value)} 
                className="input-field" 
              />
              <input 
                type="text" 
                placeholder="Enter College Name"
                value={college} 
                onChange={(e) => setCollege(e.target.value)} 
                className="input-field" 
              />
              <button onClick={handleSubmitAdditionalForm} className="btn">Submit</button>
            </>
          )}
          {activeForm === 'newdonar' && (
            <>
              <input 
                type="text"
                placeholder='User Name' 
                className="input-field" 
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='User Roll Number'
                className="input-field" 
                value={userRollNumber}
                onChange={(e) => setuserRollNumber(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='User College'
                className="input-field" 
                value={userCollege}
                onChange={(e) => setuserCollege(e.target.value)}
              />
              <input 
                type="email" 
                placeholder='User Email'
                className="input-field" 
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
              />
              <input 
                type="text"
                placeholder='User Gender'
                className="input-field" 
                value={userGender}
                onChange={(e) => setuserGender(e.target.value)}
              />
              <input 
                type="text" 
                placeholder='User Branch'
                className="input-field" 
                value={userDepartment}
                onChange={(e) => setuserDepartment(e.target.value)}
              />
              <input 
                type="number" 
                placeholder='Year of Study'
                className="input-field"
                value={userYear}
                onChange={(e) => setuserYear(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder='Blood Group'
                className="input-field" 
                value={Blood_group}
                onChange={(e) => setBlood_group(e.target.value)}
              />  
              <input 
                type="text" 
                placeholder='Enter Profession'
                className="input-field" 
                value={prof}
                onChange={(e) => setprof(e.target.value)}
              />
              <button onClick={handle_new_donar_submit} className="btn">Submit</button>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default AdminPage;
