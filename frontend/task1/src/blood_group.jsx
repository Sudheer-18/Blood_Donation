import React, { useEffect, useState } from 'react';
import './App.css'


const BloodGroupTable = () => {
  const [groupedData, setGroupedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/Check2');
        const result = await response.json();
        setGroupedData(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {/* <div className='outline'> */}
    <div className='Table'>
      <table border="1" cellPadding="10" className='a' >
        <thead>
          <tr>
            <th className='b'>S.No</th>
            <th className='b'>Blood Group</th>
            <th className='b'>Count</th>
          </tr>
        </thead>
        <tbody>
          {groupedData.map((item, index) => (
            <tr key={index}>
              <td className='b'>{index + 1}</td> 
              <td className='b'>{item.bloodGroup.trim() || "Unknown"}</td>
              <td className='b'>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* </div> */}
    </>
  );
  
};

export default BloodGroupTable;
