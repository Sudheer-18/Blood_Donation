import React, { useEffect, useState } from 'react';
import '../adminpage/tablwesection.css';  // Your CSS file for styling

const BloodGroupTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/fetch-data');
        const result = await response.json();
        setUserData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='table-container'>
      <table className='styled-table'>
        <thead>
          <tr>
            <th className='table-header'>S.No</th>
            <th className='table-header'>Roll Number</th>
            <th className='table-header'>Name</th>
            <th className='table-header'>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.userRollNumber}>
              <td className='table-data'>{index + 1}</td>
              <td className='table-data'>{user.userRollNumber}</td>
              <td className='table-data'>{user.userName}</td>
              <td className='table-data'>{user.Blood_group || 'Unknown'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodGroupTable;
